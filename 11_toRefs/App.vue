<template>
  <h2>toRefs的使用</h2>
  <!-- <p>name:{{ state.name }}</p>
  <p>age:{{ state.age }}</p> -->
  <p>name:{{ name }}</p>
  <p>age:{{ age }}</p>
  <br />
  <p>name2:{{ name2 }}</p>
  <p>age2:{{ age2 }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      name: "自来也",
      age: 47,
    });
    // torefs可以把一个响应式对象转换成普通对象，该普通对象的每个property都是一个ref
    // const state2 = toRefs(state);
    // console.log("state2===>", state2);

    const { name, age } = toRefs(state);

    function useFeatureX() {
      const state = reactive({
        name2: "自来也",
        age2: 47,
      });
      return {
        ...toRefs(state),
      };
    }

    const { name2, age2 } = useFeatureX();

    // 定时器更新数据，如果数据变化了，界面也会随之变化，肯定是响应式的数据
    setInterval(() => {
      //   state.name += "~~·";
      //   state2.name.value += "x/";
      name.value += "~0~";
      age2.value += 1;
    }, 1000);

    return {
      //   state, // 响应式数据
      //   ...state, // 不是响应式数据
      //   ...state2, // torefs返回来的对象
      name,
      age,
      name2,
      age2,
    };
  },
});
</script>

<style scoped>
</style>
