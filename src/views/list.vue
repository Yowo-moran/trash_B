<template>
  <div class="right">
    <div class="top"><el-button type="success" plain>导出文档</el-button></div>
    <el-table :data="tableData" border style="width: 100%; height: 90%">
      <el-table-column prop="date" label="日期" width="180" align="center">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180" align="center">
      </el-table-column>
      <el-table-column prop="prize" label="奖品" width="200" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >完成</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="top">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          prize: "一个大逼兜",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          prize: "一个大逼兜",
        },
      ],
    };
  },
  methods: {
    handleEdit(row) {
      console.log(row);
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
  }
}
</style>