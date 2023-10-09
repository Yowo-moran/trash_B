<template>
  <div class="all">
    <div class="left">
      <div class="tlt">
        <svg
          style="vertical-align: middle; margin-top: -2px"
          t="1682168274972"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2634"
          width="30"
          height="30"
        >
          <path
            d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z"
            fill="#ffffff"
            p-id="2635"
          ></path>
        </svg>
        <span>垃圾云管家</span>
      </div>
      <div class="nav">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#defdd5"
          text-color="#202124"
          active-text-color="#40974c"
          router
          :default-active="routerPath"
        >
          <el-menu-item index="/manage/data">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">数据统计</span>
          </el-menu-item>
          <el-menu-item index="/manage/trash">
            <i class="el-icon-delete"></i>
            <span slot="title">垃圾桶管理</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>区域选择</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/manage/home">
                <i class="el-icon-office-building"></i>
                <span slot="title">天津理工大学</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/manage/prize">
            <i class="el-icon-shopping-cart-2"></i>
            <span slot="title">奖品统计</span>
          </el-menu-item>
          <el-menu-item @click="handleClose(done)">
            <i class="el-icon-set-up"></i>
            <span slot="title">切换算法</span>
          </el-menu-item>
          <el-menu-item @click="exit">
            <i class="el-icon-switch-button"></i>
            <span slot="title">登出</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    let token = localStorage.getItem("token");
    if (token === null || token === "") {
      next("/login");
    } else {
      next();
    }
  },
  data() {
    return {
      routerPath: "/manage/data",
    };
  },
  mounted() {
    this.routerPath = this.$route.path;
  },
  methods: {
    exit() {
      console.log("登出");
      this.$router.replace("/login");
      localStorage.clear();
    },
    handleClose(done) {
      this.$confirm("是否要切换算法？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="less" scoped>
@color1: #40974c;
@color2: #defdd5;
.all {
  display: flex;
  font-size: 0;
  min-width: 1220px;
  min-height: 600px;
}
.left {
  display: inline-block;
  width: calc(17vw - 20px);
  height: 100vh;
  background-color: @color2;
  font-size: 0;
  min-height: 600px;
  min-width: 200px;
  .tlt {
    min-width: 200px;
    text-align: center;
    float: left;
    width: calc(17vw - 20px);
    font-weight: 700;
    font-size: 3vh;
    color: white;
    background-color: @color1;
    height: 8vh;
    line-height: 8vh;
    vertical-align: bottom;
    min-width: 200px;
  }
  .nav {
    min-width: 200px;
    float: left;
    text-align: center;
    // width: 17vw;
    width: calc(17vw - 20px);
  }
}
.right {
  min-width: 1000px;
  display: inline-block;
  // margin-left: 10px;
  width: 83vw;
  height: 100vh;
  background-color: white;
  min-height: 600px;
}
</style>