<script setup lang="ts">
import { ref, watch } from 'vue'
import NoteItem from '../components/NoteItem.vue'

let notes = ref([
    {
        id:'0001',
        datetime : new Date(2013, 9, 12, 14, 34, 12),
        content : "无事发生",
        level: 4,
    }, 
    {
        id:'0002',
        datetime : new Date(2023, 5, 4, 7, 54, 23),
        content : "我要完蛋了",
        level: 0
    }, 
    {
        id:'0003',
        datetime : new Date(2024, 0, 18, 8, 4, 2),
        content : "非常好",
        level: 5
    },
    {
        id:'0004',
        datetime : new Date(2014, 4, 2, 12, 34, 1),
        content : "牛逼",
        level: 3
    }
])

const findObjIndexInArray = (arr, key, value)=>{
    for (let i in arr){
        if(arr[i][key] === value){
            return i
        }
    }
    return -1
}

const updateLevel = (id, newLevel)=>{
    let i = findObjIndexInArray(notes.value, 'id', id)
    notes.value[i].level = newLevel
}

/*
arr[Array] --对象数组  judgeKey[string] --判断属性  increse[number] --是否升序(1/-1)
*/
const sortObjArray = (arr, judgeKey, increse)=>{
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = sortObjArray(arr.slice(0, mid), judgeKey, increse)
    let right = sortObjArray(arr.slice(mid), judgeKey, increse)
    return mergeArray(left, right, judgeKey, increse)
}
const mergeArray = (left, right, judgeKey, increse)=>{

    
    let index_l = 0, index_r = 0
    let arr = []
    while(index_l < left.length && index_r < right.length){ 
        if((right[index_r][judgeKey] - left[index_l][judgeKey])*increse < 0){
            arr.push(right[index_r])
            index_r++
        }
        else{
            arr.push(left[index_l])
            index_l++
        }
    }
    return arr.concat(left.slice(index_l)).concat(right.slice(index_r))
}

let sortKey = ref('datetime')
let increseSort = ref(-1)
notes.value = sortObjArray(notes.value, sortKey.value, increseSort.value)
watch(sortKey, (newValue, oldValue) => {
    notes.value = sortObjArray(notes.value, newValue, increseSort.value)
})
watch(increseSort, (newValue, oldValue) => {
    notes.value = sortObjArray(notes.value, sortKey.value, newValue)
})

</script>

<template>
<div class="grid-container">
    <div class="head">
        <div class="head-item" id="sort-key">
            <lay-radio-button v-model="sortKey" :value="'datetime'" label="时间"></lay-radio-button>
        <lay-radio-button v-model="sortKey" :value="'level'" label="评分"></lay-radio-button>
        </div>
        <div class="head-item" id="sort-order">
            <lay-select v-model="increseSort" placeholder="请选择">
                <lay-select-option :value="1" label="升序"></lay-select-option>
                <lay-select-option :value="-1" label="降序"></lay-select-option>
            </lay-select> 
        </div>
    </div>
    <div class="content">
        <div v-if="notes.length>0">
            <div v-for="item in notes" :key="item._id">
                <NoteItem :note="item" @updateLevel="updateLevel"/>
            </div>
        </div>
    </div>  
</div>

</template>

<style scoped>

.grid-container{
    display: grid;
    grid-template-rows: 70px auto;
}
.head{
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: auto 250px;
    align-items: center
}
.head-item{
   
}
#sort-order{
    display: grid;
    justify-items: end;
}
.content{

}
</style>
