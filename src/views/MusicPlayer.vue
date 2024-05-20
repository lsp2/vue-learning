<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
// 必选参数:

// keyword : 关键字

//接口地址: http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword=%E7%8E%8B%E5%8A%9B%E5%AE%8F&page=1&pagesize=20&showtype=1



</script>

<template>
<div class="container">
  <div class="top">
    <div></div>
    <div>
      <input type="text" name="" id="search-input">
      <button id="search-button">搜索</button>
    </div>
    <div></div>
  </div>
  <div class="result-list">
    
  </div>
  <div class="player">
    dd
  </div>
</div>

</template>

<style scoped>
.conatiner{
  background-color: #333;
  width: 100vh;
  /* overflow: hidden; */
}
.top{
  height: 5rem;
  width: 100%;
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: 50% auto 10%;
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
.player{
  height: 5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  box-shadow: 0 0 3px 2px #ddd;
}
</style>
