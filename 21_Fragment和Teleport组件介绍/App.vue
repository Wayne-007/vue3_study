<template>
  <h2>Fragment和Teleport组件介绍</h2>
  <hr />
  <dl>
    <dt>Fragment</dt>
    <dd>在Vue2中：组件必须有一个根标签；</dd>
    <dd>
      在Vue3中：组件可以没有根标签，内部会将多个标签包含在一个Fragment虚拟元素中；
    </dd>
    <dd>好处：减少标签层级、减少内存占用</dd>
  </dl>
  <hr />
  <ModalButton />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalButton from "./components/modalButton.vue";

export default defineComponent({
  name: "App",
  components: {
    ModalButton,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
