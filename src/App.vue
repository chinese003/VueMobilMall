<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>    
    <main-tab-bar></main-tab-bar>
 
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'
export default {
  name: 'App',
  components:{
    MainTabBar
  },
  data(){
    return{
      msg:'this is app.vue page',
      count:0,
      
      }    
  }, 
  methods:{
    

    },
}
</script>

<style>
  @import "assets/css/base.css";
</style>
