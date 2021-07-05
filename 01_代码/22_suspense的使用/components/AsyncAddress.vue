<template>
  <h2>AsyncAddress</h2>
  <p>{{ data }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios from "axios";

export default defineComponent({
  name: "AsyncAddress",
  //   setup() {
  //     return axios.get("/public/data/address.json").then((res) => {
  //       console.log(res);
  //       return {
  //         data: res.data,
  //       };
  //     });
  //     // return {}
  //   },

  async setup() {
    const result = await axios.get("/public/data/address.json");
    return {
      data: result.data,
    };
  },
});
</script>

<style scoped>
</style>
