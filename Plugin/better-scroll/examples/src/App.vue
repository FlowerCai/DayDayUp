<template>
  <router-link to="/">垂直滚动</router-link> |
  <router-link to="/horizontal">水平滚动</router-link>
  <router-view></router-view>
</template>

<script setup>
</script>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
