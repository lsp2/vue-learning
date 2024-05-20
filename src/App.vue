<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container">

    <ul class="layui-nav layui-nav-tree">
      <li class="layui-nav-item"><RouterLink to="/">备忘录</RouterLink></li>
      <li class="layui-nav-item"><RouterLink to="/about">About</RouterLink></li>
      <li class="layui-nav-item"><RouterLink to="/new">New</RouterLink></li>
    </ul>
    <div class="content-box">
         <RouterView />
    </div>
 
  </div>

</template>

<style scoped>
.container{
  display:flex;
  min-height: 100vh;
  flex-direction: row;
}
.content-box{
  flex: auto;
  padding:1rem 2rem;
}
</style>
