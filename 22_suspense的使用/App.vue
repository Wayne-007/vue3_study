<template>
  <h2>
    Suspense（悬疑）：允许我们的应用程序在等待移步组件时渲染一些后备内容，可以让我们创建一个平滑的用户体验
  </h2>
  <Suspense>
    <template #default>
      <!-- 异步组件 -->
      <!-- <AsyncComponent /> -->
      <AsyncAddress />
    </template>
    <template v-slot:fallback>
      <!-- loading的内容 -->
      <h2>Loading</h2>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

// 组件的引入有：动态引入和静态引入

// vue2中的动态引入方式：（在vue3中这种写法不行）
// const AsyncComponent = () => import("./components/AsyncComponent.vue");

// vue3中的动态引入组件的写法
// const AsyncComponent = defineAsyncComponent(
//   () => import("./components/AsyncComponent.vue")
// );

// import AsyncComponent from "./components/AsyncComponent.vue";

import AsyncAddress from "./components/AsyncAddress.vue";

export default defineComponent({
  name: "App",
  components: {
    // AsyncComponent,
    AsyncAddress,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
