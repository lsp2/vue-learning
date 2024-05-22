<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import  api  from '@/api/index.ts'
import SongList from '@/components/SongList.vue'

let songList = ref([])

let page = 1
const pagesize = 20

async function searchSong() {
  let input = document.getElementById("search-input").value
  // console.log(input);
  
  if( input === "" || input === undefined){
    return
  }
  let res = await api.search(input, page, pagesize)
  // console.log(res);
  
  if(res.data.info !== undefined){
    songList.value = res.data.info
  }
}

let song = ref({})

async function getSong(id: string) {
  // console.log(id);
  let res = await api.info(id)
  song.value = res
  console.log(song.value);
  
}

</script>

<template>
<div>
  <div class="container">
    <div class="top">
      <div></div>
      <div>
        <input type="text" name="" id="search-input">
        <button id="search-button" @click="searchSong">搜索</button>
      </div>
      <div></div>
    </div>
    <div class="result-list">
      <SongList :list="songList" @choose-song="getSong"/>
    </div>
    <div class="player">
      <div class="progress"></div>
      <div class="album-cover"><img :src="song.album_img" alt=""></div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        
      </div>
    </div>
  </div> 

</div>


</template>

<style scoped>
.conatiner{
  background-color: #333;
  width: 100%;
  grid-template-rows: 5rem auto;
  /* overflow: hidden; */
}
.top{
  height: 5rem;
  width: 100%;
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: 30% auto 30%;
  gap: 1rem;
  align-items: center;
  div{
    height: 2rem;
    display: grid;
    grid-template-columns: auto 4rem;
    #search-input{
      border-left: 1px solid #ddd;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      border-right: none;
      height: inherit;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      padding: 0.5rem;
      color: #888;
      /* width: 100%; */
    }
    #search-button{
      border-right: 1px solid #ddd;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      border-left: none;
      height: inherit;
      width: 100%;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      background: inherit;
      color: #888;
    }
    #search-button:hover{
      color:#333;
      text-shadow: 0 0 5px 2px #333;
    }
    #search-button:active{
      font-weight:bold
    }
  }

}
.result-list{
  width:100%;
}
.player{
  height: 5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  box-shadow: 0 0 3px 2px #ddd;
  .album-cover{
    height:5rem;
    width:5rem;
    img{
      display: block;
      width: 5rem;
      height: 5rem;
    }
  }
}
</style>
