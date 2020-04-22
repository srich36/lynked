<template>
  <!-- Classes are a component are added to the template root element -->
  <Card class="login-card d-flex flex-column align-items-center flex-1 px-3rem">
    <h1>
      the car
    </h1>
  </Card>
</template>

<script>
import Card from "src/components/Card";
export default {
  name: "LoginContent",
  components: {
    Card
  }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  body .login-card {
    min-width: 80%;
  }
}

@media only screen and (max-width: 1200px) {
  body .login-card {
    min-width: 60%;
  }
}

.login-card {
  border-radius: 2rem;
  max-height: 600px;
  flex-basis: 500px;
  flex-shrink: 0;
  width: 35%;
  box-sizing: border-box;
}

.px-3rem {
  padding-left: 3rem;
  padding-right: 3rem;
}
</style>
