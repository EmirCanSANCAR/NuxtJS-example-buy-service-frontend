<template>
  <!-- <v-app dark> -->
  <v-app>
    <v-app-bar fixed app>
      <nuxt-link to="/" class="text-decoration-none color-unset">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-spacer />

      <nuxt-link
        v-if="!isAuthenticated"
        to="/login"
        class="text-decoration-none"
      >
        <v-btn>Login</v-btn>
      </nuxt-link>
      <nuxt-link
        v-if="!isAuthenticated"
        to="/register"
        class="text-decoration-none"
      >
        <v-btn class="ml-1">Register</v-btn>
      </nuxt-link>

      <v-menu v-if="isAuthenticated" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            {{ loggedInUser.first_name }} {{ loggedInUser.last_name }}
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list style="cursor: pointer;">
          <nuxt-link to="/account" class="text-decoration-none">
            <v-list-item>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <v-list-item>
            <v-list-item-title @click="logout">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="true" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: 'Buy Service',
      user: this.$auth.user,
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
