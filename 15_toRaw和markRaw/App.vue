<template>
  <h2>toRaw和markRaw</h2>
  <h3>state：{{ state }}</h3>
  <hr />
  <button @click="handleToRaw">测试toRaw</button><br /><br />
  <button @click="handleMarkRaw">测试markRaw</button>
</template>

<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw } from "vue";
interface IUserInfo {
  name: string;
  age: number;
  likes?: string[];
}

export default defineComponent({
  setup() {
    const state = reactive<IUserInfo>({
      name: "小明",
      age: 20,
    });

    const handleToRaw = () => {
      const user = toRaw(state);
      user.name += "==>";
      console.log("user.toRaw===>", user);
      console.log("state===>", state);
    };
    const handleMarkRaw = () => {
      const user = markRaw(state);
      // state.likes = ["吃", "喝"];
      // state.likes[0] += "===>";

      const likes = ["吃", "喝"];
      state.likes = markRaw(likes);
      // state.likes[0] += "==>"; //  能修改
      setInterval(() => {
        if (state.likes) state.likes[0] += "==>";
        console.log(1);
      }, 1000);
      console.log("user.markRaw===>", user);
      console.log("state===>", state);
    };

    return {
      state,
      handleToRaw,
      handleMarkRaw,
    };
  },
});
</script>

<style scoped>
</style>
