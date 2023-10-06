<template>
  <div ref="chart" id="chart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "EchartsVc",
  data() {
    return {
      chart: null,
    };
  },
  props: {
    //图表数据
    chartOptions: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.$nextTick(() => {
      this.renderChart();
    });
    window.addEventListener("resize", () => {
      this.chart.resize();
    });
  },
  methods: {
    renderChart() {
      this.chart.setOption(this.chartOptions);
    },
  },
  watch: {
    chartOptions: {
      deep: true,
      handler() {
        this.renderChart();
      },
    },
  },
  beforeDestroy() {
    if (this.chart && this.chart.dispose) {
      this.chart.dispose();
    }
  },
};
</script>

<style scoped>
#chart {
  width: 100%;
  height: 100%;
}
</style>