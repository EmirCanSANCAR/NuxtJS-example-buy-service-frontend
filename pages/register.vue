<template>
  <v-layout column justify-center align-center>
    <div class="container">
      <v-card class="pa-5 mt-15 mx-auto" max-width="480">
        <v-card-title class="headline">Register</v-card-title>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="first_name"
            :rules="firstNameules"
            label="First Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="last_name"
            :rules="lastNameRules"
            label="Last Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="passwordType ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="passwordType ? 'text' : 'password'"
            label="Normal with hint text"
            hint="At least 6 characters"
            counter
            required
            @click:append="passwordType = !passwordType"
          ></v-text-field>

          <v-btn class="mt-4 mr-4" @click="submitForm">Submit</v-btn>
        </v-form>
      </v-card>
    </div>
    <v-snackbar
      v-model="formErrorSnackbar.snackbar"
      :color="'error'"
      :timeout="3000"
      :top="true"
    >
      {{ formErrorSnackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="formErrorSnackbar.snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    passwordType: false,
    valid: true,

    first_name: '',
    firstNameules: [(v) => !!v || 'First Name is required'],
    last_name: '',
    lastNameRules: [(v) => !!v || 'Last Name is required'],

    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => v.length >= 6 || 'Min 6 characters',
    ],

    formErrorSnackbar: {
      snackbar: false,
      text: '',
      timeout: 3000,
    },
  }),

  methods: {
    submitForm() {
      this.$refs.form.validate()
    },
  },
}
</script>
