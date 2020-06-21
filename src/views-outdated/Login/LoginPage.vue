<template>
  <div class="d-flex flex-column login-page flex-1">
    <header class="login-header">
      <h2>header</h2>
    </header>
    <v-facebook-login app-id="567012763917345"></v-facebook-login>

    <div
      id="login-content"
      class="justify-content-center align-items-center d-flex flex-column flex-1"
    >
      <LoginContent></LoginContent>
    </div>
    <footer><h1>Login</h1></footer>
  </div>
</template>

<script>
import LoginContent from "src/views2/Login/LoginContent";
import VFacebookLogin from "vue-facebook-login-component";

export default {
  name: "LoginPage",
  components: {
    LoginContent,
    VFacebookLogin
  }
};
</script>

<style scoped>
#login-content {
  background-image: url("~@/assets/bg-2.jpg");
  background-size: cover;
}
</style>
