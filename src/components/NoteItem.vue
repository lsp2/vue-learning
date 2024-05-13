<script setup lang="ts">
import { computed, defineEmits } from 'vue'
import ButtonSlot from './ButtonSlot.vue'

const props = defineProps(['note'])
const emit = defineEmits(['updateLevel'])

const datetext = computed(()=>{
  return new Intl.DateTimeFormat("zh", { dateStyle: "medium" }).format(props.note.datetime);
})

const clickLevel = (id, newLevel)=>{
  emit('updateLevel', id, newLevel)
}

</script>

<template>
  <div class="item-background">
    <div class="item-box">
      <div class="datetime">
        {{datetext}}
      </div>
      <div class="content">
        {{note.content}}
      </div>
      <ButtonSlot>
        <lay-button v-for="i in 5" border="red" :key="note.id+i" @click="clickLevel(note.id,i)">
          <span v-if="i<=note.level">★</span>
          <span v-if="i>note.level">☆</span>
        </lay-button>
      </ButtonSlot>
    </div>
  </div>
</template>

<style scoped>
.item-background{
    background-color:#fefefe;
    box-shadow:1px 1px 3px 1px #ddd
}
.item-background:not(last-child){
  margin-bottom:0.8rem;
}
.item-box{
    padding:0.3rem 0.5rem;
    display:flex;
    flex-direction:column;
}
.datetime{
  font-size:0.8rem;
  color:#888;
  margin-bottom:0.5rem;
}
.content{
  font-size:0.9rem;
}
.layui-btn{
  margin-left:0.2rem;
  padding:0;
  font-size:1.2rem;
  font-weight:bold;
  line-height: 1.2rem;
  border:none;
}
</style>
