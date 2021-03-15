<template>
  <!-- must include v-app to render vuetify components -->
  <v-app>
    <app-header />
    <nuxt />
  </v-app>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },
  data() {
    return {};
  }
};
</script>
