<template>
  <h2>toRef的使用及特点</h2>
  <p>state：{{ state }}</p>
  <p>name：{{ name }}</p>
  <p>age：{{ age }}</p>
  <button @click="update">改变数据</button>
  <hr />
  <Child :age="age" />
</template>

<script lang="ts">
/* toRef：
1、为源响应式对象上的某个属性创建一个ref对象，二者内部操作的都是同一个数据值，更新时二者是同步的
2、区别ref：拷贝了一份新的数据值单独操作，更新时相互不影响；
3、应用：当要将某个prop的ref传递给复合函数时，toRef很有用
 */

import { defineComponent, reactive, toRef, ref } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
  components: {
    Child,
  },
  setup() {
    const state = reactive({
      name: "小明",
      age: 18,
      car: {
        name: "保时捷",
        color: "red",
      },
    });

    const name = toRef(state, "name"); //  疑问：如何toRef car属性中的name？

    const age = ref(state.age);

    const update = () => {
      name.value += "==>";

      age.value += 5;
    };

    return {
      name,
      age,
      state,
      update,
    };
  },
});
</script>

<style scoped>
</style>
