<template>
  <v-container class="fill-height login-background" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <LoadingOverlay :on="loadingOverlayOn"></LoadingOverlay>
        <CardForm title="Signup" class="signup-card">
          <v-text-field
            label="Username"
            name="username"
            prepend-icon="mdi-account"
            type="text"
            v-model="username"
            autofocus
          ></v-text-field>

          <v-text-field
            label="Email"
            name="email"
            prepend-icon="mdi-mail"
            type="email"
            v-model="email"
          ></v-text-field>

          <v-text-field
            v-model="password1"
            id="password1"
            label="Password"
            name="password1"
            prepend-icon="mdi-lock"
            type="password"
          ></v-text-field>

          <v-text-field
            v-model="password2"
            id="password2"
            label="Confirm Password"
            name="password2"
            prepend-icon="mdi-lock"
            type="password"
          ></v-text-field>

          <template v-slot:form-subcontent>
            <div class="login-text">
              <a
                class="pb-0 mb-0 mx-auto link"
                @click="$router.push({ name: 'login' })"
                >Already have an account? Login</a
              >
            </div>
          </template>

          <template v-slot:form-actions>
            <v-btn class="px-12 mx-auto" dark rounded @click="signupUser"
              >Signup</v-btn
            >
          </template>
        </CardForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardForm from "src/components/shared/CardForm";
import LoadingOverlay from "src/components/shared/LoadingOverlay";
import { mapActions } from "vuex";
export default {
  name: "Signup",
  components: {
    CardForm,
    LoadingOverlay
  },
  data() {
    return {
      loadingOverlayOn: false,
      username: "",
      email: "",
      password1: "",
      password2: ""
    };
  },
  methods: {
    ...mapActions({
      aSignup: "registerUser"
    }),
    signupUser() {
      const [username, email, password1, password2] = [
        this.username,
        this.email,
        this.password1,
        this.password2
      ];
      this.aSignup({ username, email, password1, password2 });
    }
  }
};
</script>

<style scoped>
.login-text {
  display: flex;
  justify-content: flex-end;
}

.signup-card {
  transform: translatey(-10%);
}
</style>
