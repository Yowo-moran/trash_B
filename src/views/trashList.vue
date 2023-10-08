<template>
  <div class="trash">
    <div class="top">
      <el-button type="success" plain @click="addTrashDialog = true"
        >添加垃圾桶</el-button
      >
    </div>
    <el-table :data="tableData" border style="width: 100%; height: 88%">
      <el-table-column label="ID" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="创建日期" width="380" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
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
        @current-change="handleCurrentChange"
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
          <el-form-item label="垃圾桶地址" required>
            <el-input v-model="addTrash.address"></el-input>
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
          <el-form-item label="垃圾桶地址" required>
            <el-input v-model="editTransh.address"></el-input>
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
export default {
  data() {
    return {
      tableData: [
        {
          date: "2023-08-29",
          address: "天津理工大学12号教学楼前",
        },
        {
          date: "2023-08-29",
          address: "天津理工大学13号教学楼前",
        },
        {
          date: "2023-08-30",
          address: "天津理工大学机械学院正门前",
        },
        {
          date: "2023-08-30",
          address: "天津理工大学计算机学院正门前",
        },
        {
          date: "2023-08-30",
          address: "天津理工大学计算机学院侧门前",
        },
        {
          date: "2023-08-30",
          address: "天津理工大学28号A教学楼前",
        },
        {
          date: "2023-08-31",
          address: "天津理工大学28号B教学楼前",
        },
        {
          date: "2023-09-01",
          address: "天津理工大学图书馆前",
        },
        {
          date: "2023-09-01",
          address: "天津理工大学图书馆前",
        },
        {
          date: "2023-09-03",
          address: "天津理工大学二食堂前",
        },
        {
          date: "2023-09-03",
          address: "天津理工大学一食堂前",
        },
        {
          date: "2023-09-03",
          address: "天津理工大学一号体育场前",
        },
      ],
      addTrash: {
        address: "",
      },
      addTrashDialog: false,
      editTransh: {
        id: "",
        address: "",
      },
      editTrashDialog: false,
      currentPage: 1,
      allPage: 100,
    };
  },
  mounted() {
    this.getTrashList();
  },
  methods: {
    add() {
      console.log("添加垃圾桶！");
      this.addTrashDialog = false;
    },
    trashAddClose() {
      this.addTrash.address = "";
      this.addTrashDialog = false;
    },
    edit() {
      console.log("修改垃圾桶！");
      this.editTrashDialog = false;
    },
    trashEdit(index) {
      this.editTransh.id = index;
      this.editTransh.address = this.tableData[index].address;
      this.editTrashDialog = true;
      console.log(index);
    },
    trashEditClose() {
      this.editTrashDialog = false;
    },
    trashDetele(index) {
      console.log("删除垃圾桶！", index);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    getTrashList() {
      console.log("获取！");
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