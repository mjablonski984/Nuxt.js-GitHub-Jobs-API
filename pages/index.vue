<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="15"
          class="pl-10 ma-10"
          justify-center
          align-center
        >
          <v-row>
            <div v-for="job in allJobs" :key="job.id">
              <!-- To use slugify link replace '/jobs/'+ job.id with buildUrl(job)method containing our plugin-->
              <NuxtLink :to="buildUrl(job)">
                <JobPostTitle
                  :job="job"
                  :views="views(buildUrl(job))"
                  v-if="job.company_logo !== null && job.title !== null"
                />
              </NuxtLink>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import JobPostTitle from '../components/JobPostTitle'

export default {
  components: {
    JobPostTitle
  },
  data () {
    return {
      allJobs: []
    }
  },
  head () {
    return {
      title: 'Job Postings',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'All Job Postings from Github Jobs API'
        }
      ]
    }
  },
  computed: mapGetters({
    views: 'getViews'
  }),
  // asyncData - nuxt function 
  async asyncData ({ params, error }) {
    try {
      // to prevent cors error: install npm i @nuxtjs/proxy next in nuxt.config.js add it to modules,
      // and create proxy section, in axios get (localserver/api=uri defined in proxy seting/)  

      const { data } = await axios.get('http://localhost:3000/api/positions.json?search=javascript')
      return { allJobs: data }
      console.log(this.allJobs)
    } catch (e) {
      error({ message: 'Job posts not found.', statusCode: 404 })
    }
  },
  methods: {
    buildUrl (job) {
      return '/jobs/' + this.$slugify(job.title, job.id)
    }
  },
  // middleware: 'test'
}
</script>
