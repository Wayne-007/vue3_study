<template>
  <h2>customRef的使用</h2>
  <input type="text" v-model="keyword" />
  <p>{{ keyword }}</p>
</template>

<script lang="ts">
import { customRef, defineComponent, ref } from "vue";

// 自定义hook防抖函数
function useDebouncedRef<T>(value: T, delay = 200) {
  let timeOutId: number;
  return customRef((track, trigger) => {
    return {
      // 返回数据
      get() {
        track();
        return value;
      },
      // 设置数据
      set(newValue: T) {
        // 清除定时器
        clearInterval(timeOutId);
        // 设置定时器
        timeOutId = setTimeout(() => {
          value = newValue;
          // 告诉Vue更新界面
          trigger();
        }, delay);
      },
    };
  });
}

export default defineComponent({
  // customRef用于自定义一个ref，可以显式地控制依赖追踪和触发响应，接收一个工厂函数，两个参数分别用于追踪的track与用于触发响应的trigger，并返回一个带有get和set属性的对象

  // 使用自定义ref实现带防抖功能的v-model

  setup() {
    // const keyword = ref("");
    const keyword = useDebouncedRef("adc", 500);
    return { keyword };
  },
});
</script>

<style scoped>
</style>
