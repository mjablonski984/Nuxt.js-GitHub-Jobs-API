<template>
  <div>
    Views: {{ views }}
  </div>
</template>

<script>
export default {
  name: 'JobPostViews',
  computed: {
    views () {
      return this.$store.state.views.get(this.$route.path)
    }
  }
}
</script>
