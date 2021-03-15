<template>
  <v-container>
      <!-- Vuetify classes: text-center, primary -->
      <div class="text-center">
          <!-- Vuetify dropdown menu  -->
          <v-menu top>
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" color="primary" dark>MENU</v-btn>
            </template>  
            <v-list>
                <v-list-item v-for="(item,index) in items" :key="index">
                    <nuxt-link :to="item.to">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </nuxt-link>
                </v-list-item>
            </v-list>
          </v-menu>
      </div>
  </v-container>
</template>

<script>
export default {
    name: 'AppHeader',
    data: () => ({
        items: [
            { title: 'Home', to: {name: 'index'} },
            { title: 'About', to: {name: 'about'} },
        ]
    })
}
</script>

<style>

</style>