<template>
  <div id="home">

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'home',
    data: () => ({}),
    created() {
      this.test()
    },
    methods: {
      ...mapActions(['test'])
    }
  }
</script>

<style lang="scss" scoped>

</style>
