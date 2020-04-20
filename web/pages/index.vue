<template>
  <hello-world></hello-world>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld,
  },
  async middleware({ store, error }) {
    try {
      await store.dispatch('people/fetchPeople')
    } catch (e) {
      error({ statusCode: 503, message: `Unable to fetch calculators` })
    }
  },
}
</script>

<style lang="scss" scoped></style>
