<template>
  <div class="allLogin">
    <div class="login">
      <h1 class="title">登录</h1>
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
      <div>
        <el-button type="primary" @click="loginUp(loginForm)">登录</el-button>
        &nbsp;&nbsp;
        <el-button el-button type="primary" plain @click="returnApply"
          >返回</el-button
        >
      </div>
    </div>
  </div>
</template>
  
<script>
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
    loginUp(form) {
      // console.log(this.$router)
      console.log(form);
      this.$axios({
        method: "post",
        url: "http://82.157.249.75:6789/api/login",
        data: {
          username: form.username,
          password: form.password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((responses) => {
        console.log(responses.data);
        if (responses.data.status !== "00000") {
          this.$message.error(responses.data.message);
        } else {
          this.$message.success(responses.data.message);
          localStorage.setItem("token", responses.data.data.token);
          setTimeout(() => {
            this.$router.replace({
              name: "management",
            });
          }, 700);
        }
      });
    },
    returnApply() {
      this.$router.replace({
        name: "apply",
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