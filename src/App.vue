<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import Home from './views/home/Home'

export default {
  name: 'app',
  components: {
    Home,

  }
}
</script>

<style>
  @import './assets/css/base.css';
</style>
