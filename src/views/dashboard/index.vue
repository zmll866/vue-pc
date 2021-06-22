<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    {{ token }}
    <my-com />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapState('user', ['token']),
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
