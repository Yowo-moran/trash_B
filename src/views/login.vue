<template>
  <div class="allLogin">
    <div class="login">
      <h1 class="title">垃圾云管理</h1>
      <el-input
        class="inputword"
        v-model="loginForm.username"
        placeholder="请输入账号"
      ></el-input>
      <el-input
        class="inputword"
        placeholder="请输入密码"
        v-model="loginForm.password"
        show-password
        @keyup.enter.native="loginUp(loginForm)"
      ></el-input>

      <el-button
        type="primary"
        @click="loginUp(loginForm)"
        style="width: 50%; font-size: 16px; font-weight: 600"
        >登&nbsp;&nbsp;录</el-button
      >
    </div>
  </div>
</template>
  
<script>
import request from "@/api";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUp(form) {
      await request({
        method: "post",
        url: "/user/b/login",
        data: {
          username: form.username,
          password: form.password,
        },
      }).then((res) => {
        if (res.data.code !== "00000") {
          this.$message.error(res.data.message);
          return;
        }
        this.$message.success(res.data.message);
        localStorage.setItem("token", res.data.data.token);
        setTimeout(() => {
          this.$router.replace("/manage");
        }, 700);
      });
    },
  },
};
</script>
  
<style scoped>
.allLogin {
  width: 100%;
  /* height: 100%; */
  height: calc(100vh);
  background-image: url("../assets/bgc.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  color: #327595;
  height: 50px;
}

.occupy {
  height: 250px;
}

.login {
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 310px;
  height: 360px;
  background-color: #f2f6fcda;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 20px 20px;
}
</style>