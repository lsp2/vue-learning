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
        console.log((right[index_r][judgeKey] - left[index_l][judgeKey]));
        if((right[index_r][judgeKey] - left[index_l][judgeKey])*increse >= 0){
            arr.push(left[index_l])
            index_l++
        }
        else{
            arr.push(right[index_r])
            index_r++
        }
    }
    return arr.concat(left.slice(index_l)).concat(right.slice(index_r))
}

let sortKey = ref('datetime')
watch(sortKey, (newValue, oldValue) => {
    // console.log(sortObjArray(notes.value, newValue, 1));
    
    notes.value = sortObjArray(notes.value, newValue, -1)
})

let increseSort = ref(-1)


</script>

<template>
    <div class="head">
        <lay-radio-button v-model="sortKey" :value="'datetime'" label="时间"></lay-radio-button>
        <lay-radio-button v-model="sortKey" :value="'level'" label="评分"></lay-radio-button>
        <lay-select v-model="value" placeholder="请选择">
            <lay-select-option :value="1" label="学习"></lay-select-option>
            <lay-select-option :value="2" label="编码"></lay-select-option>
            <lay-select-option :value="3" label="运动"></lay-select-option>
        </lay-select>
    </div>
    <div>
        <div v-if="notes.length>0">
            <div v-for="item in notes" :key="item._id">
                <NoteItem :note="item" @updateLevel="updateLevel"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.head{
    margin-bottom: 1rem
}
</style>
