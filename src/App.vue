<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="page-container">
    <header>
        <nav>
          <RouterLink to="/">NoteList</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>

    <RouterView />
  </div>

</template>

<style scoped>
.page-container{
  display:grid;
  grid-template-rows: 80px auto;
}
</style>
