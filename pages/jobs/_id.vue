<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <JobPostViews />
    <JobPost :job="currentJobPost" />
  </v-layout>
</template>

<script>
import axios from 'axios'
import JobPost from '../../components/JobPost'
import JobPostViews from '../../components/JobPostViews'
import urlUtils from '../../utils/url-utils'
export default {
  components: {
    JobPost,
    JobPostViews
  },
  data () {
    return {
      currentJobPost: {}
    }
  },
  head () {
    return {
      title: this.getMetaTitle(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getMetaDescription()
        }
      ]
    }
  },
  async asyncData ({ params, error }) {
    try {
      // extract id from slugified url
      const uri = params.id
      const uuid = urlUtils.extractUUID(uri)
      const { data } = await axios.get(`http://localhost:3000/api/positions/${uuid}.json`)

      // const { data } = await axios.get(`http://localhost:3000/api/positions/${params.id}.json`) // unmodified link
      return { currentJobPost: data }
    } catch (e) {
      error({ message: 'Job post not found.', statusCode: 404 })
    }
  },
  methods: {
    getMetaTitle () {
      return this.currentJobPost.title + ' at ' + this.currentJobPost.company
    },
    getMetaDescription () {
      return this.currentJobPost.title + ' at ' + this.currentJobPost.company
    }
  },
  middleware: 'views'
}
</script>
