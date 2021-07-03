<template>
  <h2 :style="`color:${color}`">GrandSon孙子组件</h2>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "GrandSon",
  setup() {
    const color = inject("color");
    return { color };
  },
});
</script>

<style scoped>
</style>
