<template>
  <div>
    <h1>用户首页</h1>

    <ul>
      <li v-for="item in newList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {articleGroup, getArticle} from '~/apis/api'

const newList = ref([])

const {data} = await articleGroup({code: 'NEW'})
console.log(data,'ooooooooo')
const res: any = await getArticle({group_id: data.value.id, pageIndex: 1, pageSize: 5})
newList.value = res.data.value.results


</script>

<style lang="scss" scoped>

</style>