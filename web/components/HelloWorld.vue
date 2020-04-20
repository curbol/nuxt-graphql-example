<template>
  <v-card max-width="400" class="mx-auto">
    <v-toolbar flat dense color="primary">
      <v-toolbar-title>Hello World!</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-card-text>
      This is a test component. The total count is {{ total }}
      <ul v-for="person in people" :key="person.id">
        <li>{{ person.name }}</li>
      </ul>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="secondary" @click="clear()">
        Clear
      </v-btn>
      <v-spacer />
      <v-btn text color="secondary" @click="add(1)">
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('count', ['total']),
    ...mapState('people', ['people']),
  },
  methods: {
    ...mapMutations('count', ['add', 'clear']),
  },
}
</script>

<style lang="scss" scoped></style>
