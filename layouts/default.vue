<template>
  <v-app dark>
     <notifications position="bottom right" />
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      absolute
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container>
          <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      clipped: false,
      drawer: null,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Другой день',
          to: '/days'
        },
        {
          icon: 'mdi-account-cog',
          title: 'Админы',
          to: '/admins'
        },
        {
          icon: 'mdi-account-hard-hat',
          title: 'Мастера',
          to: '/masters'
        },

      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: ''
    }
  }
}
</script>

<style>
  .notification-title {
    font-size: 16px;  
  }
</style>
