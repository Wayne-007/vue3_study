<template>
  <h2>toRaw和markRaw</h2>
  <h3>state：{{ state }}</h3>
  <hr />
  <button @click="handleToRaw">测试toRaw</button><br /><br />
  <button @click="handleMarkRaw">测试markRaw</button>
</template>

<script lang="ts">
/* toRaw：
1、返回由reactive或readonly方法转换成响应式代理的普通对象
2、这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发界面更新
 */

/* markRaw：
1、标记一个对象，使其永远不会转换为代理，返回对象本身；
2、应用场景：
  * 有些值不应被设置为响应式的，例如：复杂的第三方类实例或Vue组件对象；
  * 当渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能；
 */

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
