<script setup lang="ts">
const props = defineProps(['note'])
console.log(props.note);

</script>

<template>
  <div class="item">
    {{note}}
  </div>
</template>

<style scoped>
.item{
    
}
</style>
