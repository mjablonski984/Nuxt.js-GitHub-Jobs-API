<template>
  <v-container>
    <v-card
      class="pa-5 ma-5"
      color="#ccc"
      light
    >
      <v-img :src="job.company_logo" max-height="100" max-width="200" />
      <v-divider />
      <v-card-title>
        <p style="text-decoration: none !important;">
          {{ job.title }}
        </p>
      </v-card-title>
      <v-divider />
      <v-card-text v-html="job.description" />
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'JobPost',
  props: {
    job: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}
</script>
