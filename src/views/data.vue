<template>
  <div class="right">
    <div class="top">
      <el-cascader
        v-model="area"
        :options="options"
        @change="handleChange"
        :props="{
          value: 'id',
          label: 'content',
          children: 'geoPoList',
        }"
      ></el-cascader>

      <el-button
        type="success"
        plain
        icon="el-icon-refresh-right"
        style="height: 85%"
        @click="refresh"
        >刷新</el-button
      >
    </div>
    <div class="middle">
      <div class="m-left card">
        <Echarts :chartOptions="allTrash" />
      </div>
      <div class="m-right card">
        <Echarts :chartOptions="trashData" />
      </div>
    </div>
    <div class="bottom">
      <div class="b-left card">
        <Echarts :chartOptions="status" />
      </div>
      <div class="b-right card">
        <Echarts :chartOptions="useNum" />
      </div>
    </div>
  </div>
</template>

<script>
import Echarts from "@/components/Echarts.vue";
import request from "@/api";
export default {
  components: { Echarts },
  data() {
    return {
      options: [],
      area: "天津理工大学",
      allTrash: {
        title: {
          text: "垃圾桶详细",
        },
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", "其他垃圾", "可回收", "厨余垃圾", "有害垃圾"],
          source: [
            {
              product: "唐子涵牌垃圾桶",
              可回收: 0,
              有害垃圾: 0,
              厨余垃圾: 0,
              其他垃圾: 0,
            },
            {
              product: "路小雨牌垃圾桶",
              可回收: 0,
              有害垃圾: 0,
              厨余垃圾: 0,
              其他垃圾: 0,
            },
            {
              product: "消炎牌垃圾桶",
              可回收: 0,
              有害垃圾: 0,
              厨余垃圾: 0,
              其他垃圾: 0,
            },
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [
          { type: "bar" },
          { type: "bar" },
          { type: "bar" },
          { type: "bar" },
        ],
      },
      status: {
        title: {
          text: "状态统计",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "垃圾桶",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 0, name: "故障" },
              { value: 0, name: "正常" },
            ],
          },
        ],
      },
      useNum: {
        title: {
          text: "使用次数",
        },
        xAxis: {
          type: "category",
          data: ["唐子涵牌垃圾桶", "路小雨牌垃圾桶", "消炎牌垃圾桶"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [],
            type: "line",
          },
        ],
      },
      trashData: {
        title: {
          text: "垃圾统计",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.getOptions();
  },
  methods: {
    refresh() {
      this.handleChange();
    },
    async getOptions() {
      await request({
        methods: "get",
        url: "/geography/all",
      }).then((res) => {
        if (res.data.code !== "00000") {
          this.$message.error(res.data.message);
          return;
        }
        this.$message.success(res.data.message);
        this.options = res.data.data.geoDates;
      });
    },
    handleChange() {
      this.allTrash.dataset.source = [
        {
          product: "唐子涵牌垃圾桶",
          可回收: 13,
          有害垃圾: 7,
          厨余垃圾: 20,
          其他垃圾: 30,
        },
        {
          product: "路小雨牌垃圾桶",
          可回收: 23,
          有害垃圾: 14,
          厨余垃圾: 8,
          其他垃圾: 15,
        },
        {
          product: "消炎牌垃圾桶",
          可回收: 30,
          有害垃圾: 4,
          厨余垃圾: 15,
          其他垃圾: 24,
        },
      ];
      this.status.series[0].data = [
        { value: 0, name: "故障" },
        { value: 3, name: "正常" },
      ];
      this.useNum.series[0].data = [70, 60, 73];
      this.trashData.series[0].data = [
        { value: 69, name: "其他垃圾" },
        { value: 66, name: "可回收垃圾" },
        { value: 43, name: "厨余垃圾" },
        { value: 25, name: "有害垃圾" },
      ];
      this.$message.success("获取成功");
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
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1%;
  }

  .middle {
    width: 100%;
    height: 60%;
    display: flex;
    margin-bottom: 1%;

    .m-left {
      width: 69%;
      height: 100%;
      margin-right: 1%;
    }

    .m-right {
      width: 30%;
      height: 100%;
    }
  }

  .bottom {
    width: 100%;
    height: 32%;
    display: flex;

    .b-left {
      width: 30%;
      height: 100%;
      margin-right: 1%;
    }

    .b-right {
      width: 69%;
      height: 100%;
    }
  }
}

.card {
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
}
</style>