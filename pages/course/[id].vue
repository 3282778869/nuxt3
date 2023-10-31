<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <h1>这是id: {{ route.params.id }}</h1>
</template>

