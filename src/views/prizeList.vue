<template>
  <div class="right">
    <div class="top"><el-button type="success" plain>导出文档</el-button></div>
    <el-table :data="tableData" border style="width: 100%; height: 88%">
      <el-table-column prop="id" label="序号" width="180" align="center">
      </el-table-column>
      <el-table-column
        prop="receiver"
        label="收件人"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="gift" label="奖品" width="200" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" width="200" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="over(scope.$index, scope.row)"
            >完成</el-button
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
  </div>
</template>

<script>
import request from "@/api";
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      allPage: 12,
    };
  },
  mounted() {
    this.getPrizeList();
  },
  methods: {
    async over(index) {
      await request({
        method: "post",
        url: "/shop/finish",
        data: {
          orderId: this.tableData[index].id,
        },
      }).then((res) => {
        if (res.data.code !== "00000") {
          this.$message.error(res.data.message);
          return;
        }
        this.$message.success(res.data.message);
        this.getPrizeList();
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getPrizeList();
    },
    async getPrizeList() {
      await request({
        method: "get",
        url: "/shop/orders",
      }).then((res) => {
        if (res.data.code !== "00000") {
          this.$message.error(res.data.message);
          return;
        }
        this.$message.success(res.data.message);
        this.tableData = res.data.data.orders;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.right {
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