<template>
  <v-app dark>
    <v-app-bar color="primary" clipped-left fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title color="icon">
        <n-link nuxt to="/" class="toolbar-title">
          {{ title }}
        </n-link>
      </v-toolbar-title>

      <v-divider class="mx-4 hidden-sm-and-down" inset vertical></v-divider>

      <span
        class="subtitle-1 text-truncate font-weight-light hidden-sm-and-down"
      >
        {{ subtitle }}
      </span>

      <v-spacer />

      <span v-show="$vuetify.breakpoint.smAndUp">
        <v-tooltip
          v-for="link in links"
          :key="link.title"
          color="app darken-2"
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn icon color="icon" nuxt :to="link.to" v-on="on">
              <v-icon>{{ link.icon }}</v-icon>
            </v-btn>
          </template>

          <span>{{ link.title }}</span>
        </v-tooltip>
      </span>
    </v-app-bar>

    <v-content class="ma-5">
      <nuxt />
    </v-content>

    <v-footer color="primary" class="py-4" width="auto" inset absolute app>
      <v-layout justify-center>
        <span class="font-weight-light">&copy; 2020 - Curtis Bollinger</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      title: 'Example App',
      subtitle: '',
      links: [
        {
          icon: 'mdi-hand',
          title: 'Hello World',
          to: '/',
        },
      ],
    }
  },
  head: () => ({
    titleTemplate: '%s - Nuxt Example',
  }),
}
</script>

<style lang="scss" scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>
