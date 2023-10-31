<template>
  <h1>网站首页</h1>
  <button @click="refresh()">重新来一遍</button>
</template>
<script lang="ts" setup>
import {articleGroup} from "~/apis/api";
import {watch} from "vue";

useHead({
  title: '用户首页 '
})

const {data} = await articleGroup({code: 'NEW'})

// const {data, refresh}: any = await useFetch('/api/articleGroup', {
//   method: 'GET',
//   params: {code: 'NEW'},
//   baseURL: 'https://betaapi.dns.la',
// })
// console.log(data,'data')
// watch(()=>data.value,(newV)=>{
//   console.log(newV,'pppppppp')
//   list.value = data.value
// },{deep:true,immediate:true})





</script>