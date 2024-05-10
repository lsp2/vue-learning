<script setup lang="ts">
import { ref } from 'vue'
import NoteItem from '../components/NoteItem.vue'

const notes = ref([
    "无事发生",
    "哈哈哈",
    "大古变成光"
])
</script>

<template>
    <div>
        <div v-if="notes.length>0">
            <div v-for="item in notes" :key="item._id">
                <NoteItem :note="item" />
            </div>
        </div>
        <button type="">神奇啊</button>
    </div>
</template>

<style scoped>

</style>
