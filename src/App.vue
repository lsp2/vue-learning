<script setup lang="js">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <ul class="layui-nav layui-nav-tree nav">
      <li class="layui-nav-item"><RouterLink to="/">备忘录</RouterLink></li>
      <li class="layui-nav-item"><RouterLink to="/new">New</RouterLink></li>
      <li class="layui-nav-item"><RouterLink to="/music">音乐库</RouterLink></li>
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
}
.nav{
  z-index: 999;
}
</style>
