<template>
  <h2>reactive和ref的细节问题</h2>
  <p>m1：{{ m1 }}</p>
  <p>m2：{{ m2 }}</p>
  <p>m3：{{ m3 }}</p>
  <button @click="updata">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  // ref和reactive是Vue3的Composition API中2个最重要的响应式API（ref和reactive）
  // ref用来处理基本类型的数据，reactive用来处理对象（递归深度响应式）
  // 如果用ref对象/数组，内部会自动将对象/数组转换为reactive的代理对象
  // ref内部：通过给value属性添加getter/setter来实现对数据的劫持
  // reactive内部：通过使用Proxy来实现对对象内部所有数据的劫持，并通过Reflect操作对象内部数据
  // ref的数据操作：在js中要.value，在模板中不需要（内部解析模板时会自动添加.value）

  setup() {
    const m1 = ref("hhh");
    const m2 = reactive({
      name: "小明",
      wife: { name: "小红" },
    });
    const m3 = ref({
      name: "小明",
      wife: { name: "小红" },
    });

    function updata() {
      m1.value += "--·";
      m2.name += "--·";
      m3.value.wife.name += "--·";
    }

    console.log("m1===>", m1);
    console.log("m2===>", m2);
    console.log("m3===>", m3);

    return {
      m1,
      m2,
      m3,
      updata,
    };
  },
  name: "App",
});
</script>

<style scoped>
</style>
