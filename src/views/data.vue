<template>
  <div class="right">
    <div class="top">
      <el-select
        v-model="area"
        placeholder="请选择"
        style="height: 85%"
        @change="selectArea"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

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
export default {
  components: { Echarts },
  data() {
    return {
      options: [
        {
          value: "天津理工大学",
          label: "天津理工大学",
        },
      ],
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
              product: "1号垃圾桶",
              可回收: 43.3,
              有害垃圾: 85.8,
              厨余垃圾: 93.7,
              其他垃圾: 40,
            },
            {
              product: "2号垃圾桶",
              可回收: 83.1,
              有害垃圾: 73.4,
              厨余垃圾: 55.1,
              其他垃圾: 40,
            },
            {
              product: "3号垃圾桶",
              可回收: 86.4,
              有害垃圾: 65.2,
              厨余垃圾: 82.5,
              其他垃圾: 40,
            },
            {
              product: "4号垃圾桶",
              可回收: 72.4,
              有害垃圾: 53.9,
              厨余垃圾: 39.1,
              其他垃圾: 40,
            },
            {
              product: "5号垃圾桶",
              可回收: 43.3,
              有害垃圾: 85.8,
              厨余垃圾: 93.7,
              其他垃圾: 40,
            },
            {
              product: "6号垃圾桶",
              可回收: 83.1,
              有害垃圾: 73.4,
              厨余垃圾: 55.1,
              其他垃圾: 40,
            },
            {
              product: "7号垃圾桶",
              可回收: 86.4,
              有害垃圾: 65.2,
              厨余垃圾: 82.5,
              其他垃圾: 40,
            },
            {
              product: "8号垃圾桶",
              可回收: 72.4,
              有害垃圾: 53.9,
              厨余垃圾: 39.1,
              其他垃圾: 40,
            },
            {
              product: "9号垃圾桶",
              可回收: 43.3,
              有害垃圾: 85.8,
              厨余垃圾: 93.7,
              其他垃圾: 40,
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
          text: "垃圾桶状态统计",
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
              { value: 484, name: "故障" },
              { value: 300, name: "正常" },
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
          data: [
            "1号垃圾桶",
            "2号垃圾桶",
            "3号垃圾桶",
            "4号垃圾桶",
            "5号垃圾桶",
            "6号垃圾桶",
            "7号垃圾桶",
            "8号垃圾桶",
            "9号垃圾桶",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 120, 200],
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
            data: [
              { value: 484, name: "其他垃圾" },
              { value: 1048, name: "可回收垃圾" },
              { value: 580, name: "厨余垃圾" },
              { value: 735, name: "有害垃圾" },
            ],
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
  methods: {
    selectArea(e) {
      console.log(e);
    },
    refresh() {
      console.log("刷新");
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