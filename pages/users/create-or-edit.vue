<template>
  <h1>创建编辑</h1>
  <!--  <h2>{{ list }}</h2>-->
  <ul>
<!--    <li v-for="item in newList" :key="item.id">{{ item.title }}</li>-->
  </ul>

</template>

<script lang="ts" setup>
// import {articleGroup, getArticle} from '~/apis/api'
//
// const newList = ref([])
//
// const res:any = await articleGroup({code: 'NEW'})
// console.log(res.value.data)
// if (res.value.code == 200) {
//   const req:any = await getArticle({group_id: res.value.data.id, pageIndex: 1, pageSize: 5})
//   newList.value = req.value.data.results
// }

// const {data}: any = await useLazyFetch('/apis/articleGroup', {
//   method: 'GET',
//   params: {code: 'NEW'},
//   ...config
// })

// const list = ref()
// if (data.value.code == 200) {
//   const res: any = await useLazyFetch('/apis/getArticle', {
//     method: 'GET',
//     params: {
//       group_id: data.value.data.id,
//       pageIndex: 1,
//       pageSize: 5,
//     },
//     baseURL: 'https://betaapi.dns.la'
//   })
//   list.value = res.data.value.data
// }
</script>

<style lang="scss" scoped>

</style>