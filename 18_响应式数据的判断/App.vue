<template>
  <h2>响应式数据的判断</h2>
</template>

<script lang="ts">
import {
  defineComponent,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  reactive,
  readonly,
  ref,
} from "vue";

export default defineComponent({
  name: "App",

  /* 
  isRef：检查一个值是否为一个ref对象
  isReactive：检查一个对象是否由reactive创建的响应式代理
  isReadonly：检查一个对象是否是由readonly创建的只读代理
  isProxy：检查一个对象是否是由reactive或者readonly方法创建的代理
 */

  setup() {
    console.log(isRef(ref({})));
    console.log(isReactive(reactive({})));
    console.log(isReadonly(readonly({})));
    console.log(isProxy(readonly({})));
    console.log(isProxy(reactive({})));

    return {};
  },
});
</script>

<style scoped>
</style>
