<template>
  <div class="right">
    <div class="top"><el-button type="success" plain>导出文档</el-button></div>
    <el-table :data="tableData" border style="width: 100%; height: 88%">
      <el-table-column prop="date" label="日期" width="180" align="center">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180" align="center">
      </el-table-column>
      <el-table-column prop="prize" label="奖品" width="200" align="center">
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
export default {
  data() {
    return {
      tableData: [
        {
          date: "2023-09-07",
          name: "唐子涵",
          phone: "13116149651",
          address: "天津天津市西青区李七庄街宾水西道391号天津理工大学北区",
          prize: "头戴式耳机",
        },
        {
          date: "2023-09-08",
          name: "路小雨",
          phone: "15606149231",
          address:
            "天津天津市西青区精武镇详细地址宾水西道延长线399号天津市大学软件学院公寓",
          prize: "保温水杯",
        },
        {
          date: "2023-09-08",
          name: "萧淡",
          phone: "13314238141",
          address: "天津天津市西青区李七庄街宾水西道391号天津理工大学南区",
          prize: "头戴式耳机",
        },
        {
          date: "2023-09-08",
          name: "路明非",
          phone: "13312322141",
          address:
            "天津天津市西青区精武镇详细地址宾水西道延长线399号天津市大学软件学院公寓",
          prize: "碳素签字笔",
        },
        {
          date: "2023-09-09",
          name: "齐睿芮",
          phone: "15232322141",
          address: "天津天津市西青区李七庄街宾水西道391号天津理工大学南区",
          prize: "头戴式耳机",
        },
        {
          date: "2023-09-09",
          name: "凌波丽",
          phone: "15602109177",
          address:
            "天津天津市西青区精武镇详细地址宾水西道延长线399号天津市大学软件学院公寓",
          prize: "碳素签字笔",
        },
        {
          date: "2023-09-12",
          name: "潇宇浩",
          phone: "15602229177",
          address: "天津天津市西青区李七庄街宾水西道391号天津理工大学南区",
          prize: "保温水杯",
        },
        {
          date: "2023-09-14",
          name: "张思俊",
          phone: "13116149652",
          address:
            "天津天津市西青区精武镇详细地址宾水西道延长线399号天津市大学软件学院公寓",
          prize: "碳素签字笔",
        },
        {
          date: "2023-09-14",
          name: "张昭慧",
          phone: "15602113247",
          address: "天津天津市西青区李七庄街宾水西道391号天津理工大学北区",
          prize: "毛绒玩具",
        },
        {
          date: "2023-09-18",
          name: "苏明皓",
          phone: "15610294247",
          address: "天津天津市西青区李七庄街宾水西道391号天津理工大学北区",
          prize: "碳素签字笔",
        },
      ],
      currentPage: 1,
      allPage: 12,
    };
  },
  mounted() {
    this.getPrizeList();
  },
  methods: {
    over(index) {
      console.log("完成！", index);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    getPrizeList() {
      console.log("获取！");
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