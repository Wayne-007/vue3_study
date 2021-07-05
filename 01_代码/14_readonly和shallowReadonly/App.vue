<template>
  <h2>readonly和shallowReadonly</h2>
  <p>state：{{ state }}</p>
  <p>state2：{{ state2 }}</p>
  <p>state3：{{ state3 }}</p>
  <button @click="update">修改数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      name: "佐助",
      car: {
        name: "宝马",
      },
    });
    const state2 = readonly(state);
    const state3 = shallowReadonly(state);
    const update = () => {
      // state.name += "==>";
      // 报错：深度只可读
      // state2.name += "==>";
      // 浅只可读，且修改数据会影响到前面的数据
      // state3.name += "==>";
      state3.car.name += "==>";
    };
    return {
      state,
      state2,
      state3,
      update,
    };
  },
});
</script>

<style scoped>
</style>
