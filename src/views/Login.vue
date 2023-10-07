<template>
  <h1>这是登录页</h1>
  <button @click="userLogin">点击登录</button>
</template>

<script>
export default {
  methods: {
    userLogin() {
      setTimeout(() => {
        let token = "12345";
        localStorage.setItem("token", token);
        if(this.$route.query.redirect){
            this.$router.replace(this.$route.query.redirect)
        }else{
        this.$router.replace('/home')
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
