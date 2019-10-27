<template>
  <div id="app">
	<headernav></headernav>
    <router-view></router-view>
  </div>
</template>

<script>
import headernav from './components/header-nav'
export default {
  name: 'App',
  components:{
	  headernav
  }
}
</script>

<style>

</style>
