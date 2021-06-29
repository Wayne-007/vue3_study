<template>
  <h2>shallowReactive和shallowRef</h2>
  <p>m1：{{ m1 }}</p>
  <p>m2：{{ m2 }}</p>
  <p>m3：{{ m3 }}</p>
  <p>m4：{{ m4 }}</p>
  <button @click="update">修改数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
} from "vue";

// 什么时候用浅响应式
// 1、一般情况下用ref和reactive即可
// 2、如果有一个对象数据，结构比较深，但变化时只是外层属性变化===>shallowReactive
// 3、如果有一个对象数据，后面会产生新的对象来替换===>shallowRef

export default defineComponent({
  name: "App",
  setup() {
    // 深度劫持（深度监听）---深度响应式
    const m1 = reactive({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    // 浅劫持（浅监听）---浅响应式
    const m2 = shallowReactive({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    // 深度劫持（深度监听）---深度响应式
    const m3 = ref({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    // 浅劫持（浅监听）---浅响应式
    const m4 = shallowRef({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    const update = () => {
      // m1.name += "==>";
      // m1.car.name += "==>";
      // m2.name += "==>";
      // m2.car.name += "==>";
      // m3.value.name += "===>";
      // m3.value.car.name += "===>";
      // m4.value.name += "==>";
      // m4.value.car.name += "==>";
    };
    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
});
</script>

<style scoped>
</style>
