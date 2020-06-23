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
            :error-messages="usernameErrors"
            @change="$v.username.$touch()"
            autofocus
          ></v-text-field>

          <v-text-field
            label="Email"
            name="email"
            prepend-icon="mdi-mail"
            type="email"
            v-model="email"
            :error-messages="emailErrors"
            @change="$v.email.$touch()"
          ></v-text-field>

          <v-text-field
            v-model="password1"
            id="password1"
            label="Password"
            name="password1"
            prepend-icon="mdi-lock"
            type="password"
            :error-messages="password1Errors"
            @change="$v.password1.$touch()"
          ></v-text-field>

          <v-text-field
            v-model="password2"
            id="password2"
            label="Confirm Password"
            name="password2"
            prepend-icon="mdi-lock"
            type="password"
            :error-messages="password2Errors"
            @change="$v.password2.$touch()"
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
import errorMap from "src/errors";
import { ErrorParser } from "src/utils/errorUtils";
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import { signupValidators } from "src/config";

import { mapActions } from "vuex";

export default {
  name: "Signup",
  components: {
    CardForm,
    LoadingOverlay
  },
  mixins: [validationMixin],

  validations: {
    username: {
      required
    },
    email: {
      required,
      email
    },
    password1: {
      required,
      minLength: minLength(signupValidators.password1.minLength || 8)
    },
    password2: {
      required,
      sameAsPassword1: sameAs("password1"),
      minLength: minLength(signupValidators.password2.minLength || 8)
    }
  },
  validationGroup: ["username", "email", "password1", "password2"],
  data() {
    return {
      loadingOverlayOn: false,
      username: "",
      email: "",
      password1: "",
      password2: "",
      usernameErrorMessages: [],
      emailErrorMessages: [],
      password1ErrorMessages: [],
      password2ErrorMessages: []
    };
  },
  computed: {
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return [];
      !this.$v.username.required && errors.push("Username is required");
      return errors.concat(this.usernameErrorMessages);
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return [];
      !this.$v.email.required && errors.push("Email is required");
      !this.$v.email.email && errors.push("Invlaid email address");
      return errors.concat(this.emailErrorMessages);
    },

    password1Errors() {
      const errors = [];
      if (!this.$v.password1.$dirty) return [];
      !this.$v.password1.required && errors.push("Password is required");
      !this.$v.password1.minLength &&
        errors.push("Password must be at least 8 characters");
      return errors.concat(this.password1ErrorMessages);
    },

    password2Errors() {
      const errors = [];
      if (!this.$v.password2.$dirty) return [];
      !this.$v.password2.sameAsPassword1 &&
        errors.push("Passwords do not match");
      !this.$v.password2.required && errors.push("Password is required");
      !this.$v.password2.minLength &&
        errors.push("Password must be at least 8 characters");
      return errors.concat(this.password2ErrorMessages);
    }
  },
  methods: {
    ...mapActions({
      aSignup: "registerUser"
    }),

    formValid() {
      this.$v.$touch();
      return !this.$v.$invalid;
    },
    async signupUser() {
      if (!this.formValid()) return;
      const [username, email, password1, password2] = [
        this.username,
        this.email,
        this.password1,
        this.password2
      ];
      try {
        this.clearErrorArrays();
        this.loadingOverlayOn = true;
        await this.aSignup({
          username,
          email,
          password1,
          password2
        });
        this.$router.push({ name: "home" });
      } catch (e) {
        const errorJSON = e.response.data;
        this.parseError(errorJSON);
      } finally {
        this.loadingOverlayOn = false;
      }
    },

    parseError(errorJSON) {
      const keyMap = {
        email: this.emailErrorMessages,
        username: this.usernameErrorMessages,
        password1: this.password1ErrorMessages,
        password2: this.password2ErrorMessages
      };
      const errorParser = new ErrorParser(errorJSON, keyMap);
      errorParser.parse(errorMap["signup"]);
    },

    clearErrorArrays() {
      this.usernameErrorMessages = [];
      this.emailErrorMessages = [];
      this.password1ErrorMessages = [];
      this.password2ErrorMessages = [];
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
