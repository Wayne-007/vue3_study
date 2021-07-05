<template>
  <h2>setup和ref的基本使用</h2>
  <div>{{ count }}</div>
  <button @click="handleClick">click me!</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

// 暴露出去一个定义好的组件
export default defineComponent({
  name: "App",
  // 需求：页面打开后看到计数，点击按钮，计数增加

  // vue2的写法

  // data() {
  //   return { count: 0 };
  // },
  // methods: {
  //   handleClick() {
  //     this.count++;
  //   },
  // },

  // vue3的写法

  // setup是组合API的入口函数
  setup() {
    // let count = 0; // 该数据还不是响应式数据

    // ref是一个函数，作用：定义一个响应式的数据，返回的是一个Ref对象，对象中有一个value属性，如果需要对数据进行操作，需要使用该Ref对象调用value属性的方式进行数据的操作；
    // ref一般用来定义一个 基本类型 的响应式数据

    // html模板中是不需要使用.value属性写法的
    // count类型为 Ref 类型
    const count = ref(0);

    function handleClick() {
      count.value++;
    }

    return {
      count,
      handleClick,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
