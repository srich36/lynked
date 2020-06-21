<template>
  <v-container class="fill-height login-background" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <LoadingOverlay :on="loadingOverlayOn"></LoadingOverlay>
        <CardForm title="Login">
          <v-text-field
            label="Username"
            name="login"
            prepend-icon="mdi-account"
            type="text"
            :error-messages="loginErrors"
            :value="username"
            @input="updateUsername"
            autofocus
          ></v-text-field>

          <v-text-field
            :value="password"
            @input="updatePassword"
            id="password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            type="password"
            :error-messages="loginErrors"
          ></v-text-field>

          <template v-slot:form-subcontent>
            <div class="signup">
              <a
                class="pb-0 mb-0 mx-auto link"
                @click="$router.push({ name: 'Signup' })"
                >Don't have an account? Register</a
              >
            </div>
          </template>

          <template v-slot:form-actions>
            <v-btn class="px-12 mx-auto" dark rounded @click="loginUser"
              >Login</v-btn
            >
          </template>
        </CardForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardForm from "src/components/views/Login/CardForm";
import LoadingOverlay from "src/components/shared/LoadingOverlay";
import { mapActions } from "vuex";
export default {
  name: "LoginPage",
  components: {
    CardForm,
    LoadingOverlay
  },
  data() {
    return {
      username: "",
      password: "",
      loginErrors: [],
      loadingOverlayOn: false
    };
  },
  methods: {
    ...mapActions({
      aLogin: "loginUser"
    }),
    async loginUser() {
      this.loadingOverlayOn = true;
      const username = this.username;
      const password = this.password;
      const credentials = {
        username,
        password
      };
      try {
        await this.aLogin(credentials);
        this.$router.push({ name: "home" });
      } catch (e) {
        this.username = "";
        this.password = "";
        this.loginErrors.push("Invalid username or password");
      } finally {
        this.loadingOverlayOn = false;
      }
    },

    checkToClearErrors(text) {
      if (text !== "") this.loginErrors = [];
    },

    updatePassword(password) {
      this.checkToClearErrors(password);
      this.password = password;
    },
    updateUsername(username) {
      this.checkToClearErrors(username);
      this.username = username;
    }
  }
};
</script>

<style scoped>
.login-background {
}

.login-card {
  transform: translatey(-10%);
}

.signup {
  display: flex;
  justify-content: flex-end;
}
</style>

<style>
.w-100 {
  width: 100%;
}

.flex-end {
  align-items: flex-end;
}

.signup .link {
  color: grey;
}

.signup .link:hover {
  text-decoration: underline;
  color: #1976d2;
}
</style>
