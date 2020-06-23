<template>
  <v-container class="fill-height login-background" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <LoadingOverlay :on="loadingOverlayOn"></LoadingOverlay>
        <CardForm title="Login" class="login-card">
          <v-text-field
            label="Username"
            name="login"
            prepend-icon="mdi-account"
            type="text"
            :error-messages="usernameErrorMessages"
            :value="username"
            @input="updateUsername"
            @change="$v.username.$touch()"
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
            @change="$v.password.$touch()"
            :error-messages="passwordErrorMessages"
          ></v-text-field>

          <template v-slot:form-subcontent>
            <div class="signup">
              <a
                class="pb-0 mb-0 mx-auto link"
                @click="$router.push({ name: 'signup' })"
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
/**
 * write a component's description
 */
import CardForm from "src/components/shared/CardForm";
import LoadingOverlay from "src/components/shared/LoadingOverlay";

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

import { mapActions } from "vuex";
export default {
  name: "LoginPage",
  components: {
    CardForm,
    LoadingOverlay
  },
  mixins: [validationMixin],
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  computed: {
    /**
     * @description Create username error array for form validation
     * @returns {Array}
     */
    usernameErrorMessages() {
      const errors = [];
      if (!this.$v.username.$dirty) return [];
      !this.$v.username.required && errors.push("Username is required");
      return this.loginErrors.concat(errors);
    },

    /**
     * @description Create password error array for form validation
     * @returns {Array}
     */
    passwordErrorMessages() {
      const errors = [];
      if (!this.$v.password.$dirty) return [];
      !this.$v.password.required && errors.push("Password is required");
      return this.loginErrors.concat(errors);
    }
  },
  /**
   * @description
   * @returns {any}
   */
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

    /**
     * @description Return whether login form is valid
     * @returns {Boolean}
     */
    loginFormValid() {
      this.$v.$touch();
      return !this.$v.$invalid;
    },
    /**
     * @description Dispatch action to attempt to login
     * the user given the provided credentials. Only runs if the
     * form is valid
     */
    async loginUser() {
      if (!this.loginFormValid()) return;
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

    /**
     * @description Clear JSON response errors if the text is not
     * empty (the user has started to re-enter information)
     * @param {String} text
     */
    checkToClearErrors(text) {
      if (text !== "") this.loginErrors = [];
    },

    /**
     * @description Set password based on what the user entered
     * @param {String} password
     */
    updatePassword(password) {
      this.checkToClearErrors(password);
      this.password = password;
    },
    /**
     * @description Set the username based on what the user entered
     * @param {any} username
     */
    updateUsername(username) {
      this.checkToClearErrors(username);
      this.username = username;
    }
  }
};
</script>

<style scoped>
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

a.link {
  color: grey;
}

a.link:hover {
  text-decoration: underline;
  color: #1976d2;
}
</style>
