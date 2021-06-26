<template>
  <h2>hooks的使用：鼠标点击任意位置显示x，y轴坐标</h2>
  <p>x：{{ x }}</p>
  <p>y：{{ y }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useMousePosition from "./hooks/useMousePosition";

export default defineComponent({
  setup() {
    const { x, y } = useMousePosition();
    // const x = ref(-1);
    // const y = ref(-1);

    // const update = (e: MouseEvent) => {
    //   x.value = e.pageX;
    //   y.value = e.pageY;
    // };

    // onMounted(() => {
    //   window.addEventListener("click", update);
    // });

    // onBeforeUnmount(() => {
    //   window.removeEventListener("click", update);
    // });
    return {
      x,
      y,
    };
  },
});
</script>

<style scoped>
</style>
