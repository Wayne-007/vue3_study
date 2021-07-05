<template>
  <div>AsyncComponent</div>
  <p>{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AsyncComponent",
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: "what are you no sha lei",
        });
      }, 2000);
    });
    // return {};
  },
});
</script>

<style scoped>
</style>
