<template>
  <div class="trash">
    <div class="top">
      <el-button type="success" plain @click="addTrashDialog = true"
        >添加垃圾桶</el-button
      >
    </div>
    <el-table :data="tableData" border style="width: 100%; height: 88%">
      <el-table-column
        prop="createTime"
        label="创建日期"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="content" label="名称" align="center">
      </el-table-column>
      <el-table-column prop="district" label="地址" align="center">
      </el-table-column>
      <el-table-column prop="location" label="详细地址" align="center">
      </el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="trashEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="trashDetele(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="top">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="12"
        :total="allPage"
      >
      </el-pagination>
    </div>
    <el-dialog
      title="添加垃圾桶"
      :visible.sync="addTrashDialog"
      width="30%"
      :before-close="trashAddClose"
    >
      <div>
        <el-form
          ref="addTrash"
          :model="addTrash"
          label-width="120px"
          label-position="left"
        >
          <el-form-item label="姓名" required>
            <el-input v-model="addTrash.name"></el-input>
          </el-form-item>
          <el-form-item label="区域id" required>
            <el-cascader
              v-model="districtId"
              :options="options"
              @change="handleChange"
              :props="{
                expandTrigger: 'click',
                value: 'id',
                label: 'content',
                multiple: false,
                children: 'geoPoList',
              }"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="位置信息名称" required>
            <el-input v-model="addTrash.location"></el-input>
          </el-form-item>
          <el-form-item label="纬度" required>
            <el-input v-model="addTrash.latitude"></el-input>
          </el-form-item>
          <el-form-item label="经度" required>
            <el-input v-model="addTrash.longitude"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addTrashDialog = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="编辑垃圾桶"
      :visible.sync="editTrashDialog"
      width="30%"
      :before-close="trashEditClose"
    >
      <div>
        <el-form
          ref="editTrash"
          :model="editTransh"
          label-width="120px"
          label-position="left"
        >
          <el-form-item label="姓名" required>
            <el-input v-model="editTransh.name"></el-input>
          </el-form-item>
          <el-form-item label="区域id" required>
            <el-cascader
              v-model="districtId"
              :options="options"
              @change="handleEdit"
              :props="{
                expandTrigger: 'click',
                value: 'id',
                label: 'content',
                multiple: false,
                children: 'geoPoList',
              }"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="位置信息名称" required>
            <el-input v-model="editTransh.location"></el-input>
          </el-form-item>
          <el-form-item label="纬度" required>
            <el-input v-model="editTransh.latitude"></el-input>
          </el-form-item>
          <el-form-item label="经度" required>
            <el-input v-model="editTransh.longitude"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editTrashDialog = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import request from "@/api";
export default {
  data() {
    return {
      tableData: [],
      districtId: "",
      addTrash: {
        name: "",
        districtId: "",
        location: "",
        latitude: "",
        longitude: "",
      },
      options: [],
      addTrashDialog: false,
      editTransh: {
        name: "",
        districtId: "",
        location: "",
        latitude: "",
        longitude: "",
      },
      editTrashDialog: false,
      currentPage: 1,
      allPage: 12,
    };
  },
  mounted() {
    this.getTrashList();
    this.getOptions();
  },
  methods: {
    async add() {
      console.log("添加垃圾桶！");
      await request({
        method: "post",
        url: "/garbage/add",
        data: this.addTrash,
      }).then((res) => {
        if (res.data.code !== "00000") {
          this.$message.error(res.data.message);
          return;
        }
        this.$message.success(res.data.message);
        this.addTrash = {
          name: "",
          districtId: "",
          location: "",
          latitude: "",
          longitude: "",
        };
        this.districtId = "";
        this.getTrashList();
        this.addTrashDialog = false;
      });
    },
    trashAddClose() {
      this.addTrash.address = "";
      this.addTrashDialog = false;
    },
    async edit() {
      console.log("修改垃圾桶！");
      await request({
        method: "post",
        url: "/garbage/edit",
        data: this.editTransh,
      }).then((res) => {
        if (res.data.code !== "00000") {
          this.$message.error(res.data.message);
          return;
        }
        this.$message.success(res.data.message);
        this.getTrashList();
        this.editTrashDialog = false;
      });
    },
    trashEdit(index) {
      this.editTransh.id = this.tableData[index].id;
      this.editTransh.name = this.tableData[index].content;
      this.editTransh.location = this.tableData[index].location;
      this.editTransh.latitude = this.tableData[index].latitude;
      this.editTransh.longitude = this.tableData[index].longitude;
      this.editTrashDialog = true;
      console.log(index);
    },
    trashEditClose() {
      this.editTrashDialog = false;
    },
    async trashDetele(index) {
      await request({
        method: "post",
        url: "/garbage/delete",
        params: {
          garbageId: this.tableData[index].id,
        },
      }).then((res) => {
        if (res.data.code !== "00000") {
          this.$message.error(res.data.message);
          return;
        }
        this.$message.success(res.data.message);
        this.getTrashList();
      });
      console.log("删除垃圾桶！", index);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    async getTrashList() {
      console.log("获取！");
      await request({
        method: "get",
        url: "/garbage/all",
        params: {
          type: "3",
          id: "1",
        },
      }).then((res) => {
        console.log(111, res);
        if (res.data.code !== "00000") {
          this.$message.error(res.data.message);
          return;
        }
        this.$message.success(res.data.message);
        this.tableData = res.data.data.garbageList;
      });
    },
    async getOptions() {
      await request({
        method: "get",
        url: "/geography/all",
      }).then((res) => {
        if (res.data.code !== "00000") {
          this.$message.error(res.data.message);
          return;
        }
        this.$message.success(res.data.message);
        this.options = res.data.data.geoDates;
        console.log(res.data);
      });
    },
    handleChange(value) {
      this.addTrash.districtId = value[2];
    },
    handleEdit(value) {
      this.editTransh.districtId = value[2];
    },
  },
};
</script>

<style lang="less" scoped>
.trash {
  box-sizing: border-box;
  padding: 20px;
  min-width: 1000px;
  display: inline-block;
  // margin-left: 10px;
  width: 83vw;
  height: 100vh;
  min-height: 600px;
  background-color: #e6f6e1;
  .top {
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 1%;
  }
}
</style>