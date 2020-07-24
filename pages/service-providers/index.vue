<template>
  <v-data-table
    :headers="headers"
    :items="serviceProviders"
    :server-items-length="serviceProvidersCount"
    :items-per-page="per_page"
    :options.sync="options"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <nuxt-link
        :to="{ name: 'service-providers', params: { id: item.id } }"
        class="text-decoration-none color-unset"
      >
        <v-icon>mdi-dialpad</v-icon>
      </nuxt-link>
      <v-spacer />
    </template>
  </v-data-table>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      per_page: 5,
      loading: true,
      options: {},
      headers: [
        { text: 'First Name', value: 'first_name' },
        { text: 'Last Name', value: 'last_name' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      serviceProviders: [],
      serviceProvidersCount: 0,
      watch: {
        options: {
          handler() {
            this.getDataFromApi()
          },
          deep: true,
        },
      },
    }
  },
  mounted() {
    this.getDataFromApi()
  },
  methods: {
    getDataFromApi() {
      console.log('TEST')
      this.loading = true
      this.$axios
        .get('service-providers', {
          params: {
            per_page: this.per_page,
          },
        })
        .then((payload) => {
          this.serviceProviders = payload.data.data
          this.serviceProvidersCount = payload.data.total
          this.loading = true
        })
    },
  },
}
</script>
