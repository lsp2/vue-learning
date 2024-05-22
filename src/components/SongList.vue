<script setup lang="ts">
import { toRef, watch } from "vue"

const props = defineProps(['list'])
const listRef = toRef(props, "list")
const emit = defineEmits(['choose-song'])

const calDuration = val => {
    let h, m ,s
    h = Math.floor(val / 3600)
    m = Math.floor(val % 3600 / 60)
    s = val % 60
    let sh = "", sm = "", ss = ""
    if (h > 0){
        // if(sh < 10){
        //     sh += "0"
        // }
        sh += `${h}:`
    }
    if (m < 10 && h > 0){
        sm += "0"
    }
    sm += `${m}:`
    if (s < 10){
        ss += "0"
    }
    ss += s
    return `${sh}${sm}${ss}`
}

const choose = e => {
    emit('choose-song', e.currentTarget.dataset.id)
}

</script>

<template>
<div>
    <div class="container">
        <div v-if="listRef.length>0">
            <div v-for="(item,i) in listRef" :key="item.hash">
                <div class="song-item" :data-id="item.hash" @click="choose">
                    <div>{{item.songname}}</div>
                    <div>{{item.singername}}</div>
                    <div>{{item.album_name}}</div>
                    <div>{{calDuration(item.duration)}}</div>
                </div>
            </div>
        </div>
        <div>
            空空如也
        </div>
    </div>
</div>

</template>

<style scoped>
.container{
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #777;
}
.song-item{
    display: grid;
    align-items: center;
    grid-template-columns: 14rem 12rem auto 8rem;
    height: 3rem;
    padding: 0 1rem;
    border-bottom: 1px solid #eee;
}
.song-item:hover{
    box-shadow: 0 0 3px 1px #ddd;
}
.song-item:active{
    box-shadow:none
}
</style>
