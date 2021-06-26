<template>
  <h2>App父级组件</h2>
  <button @click="isShow = !isShow">切换显示</button><br />
  <button @click="conut++">更新子组件数据({{ conut }})</button>
  <hr />
  <Child v-if="isShow" :conut="conut" />
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
import Child from "./components/Child.vue";

// 生命周期的执行顺序总结：Parent-setup ==> Parent-beforeCreate(2.x) ==> Parent-created(2.x) ==> Parent-onBeforeMount(3.x) ==> Parent-beforeMount(2.x) ==> Child-setup ==> Child-beforeCreate(2.x) ==> Child-created(2.x) ==> Child-onBeforeMount(3.x) ==> Child-beforeMount(2.x) ==> Child-onMounted(3.x) ==> Child-mounted(2.x) ==> Parent-onMounted(3.x) ==> Parent-mounted(2.x)

export default defineComponent({
  // vue2.x的生命周期钩子
  beforeCreate() {
    console.log("Parent---beforeCreate---2.x");
  },
  created() {
    console.log("Parent---created---2.x");
  },
  beforeMount() {
    console.log("Parent---beforeMount---2.x");
  },
  mounted() {
    console.log("Parent---mounted---2.x");
  },
  beforeUpdate() {
    console.log("Parent---beforeUpdate---2.x");
  },
  updated() {
    console.log("Parent---updated---2.x");
  },
  beforeUnmount() {
    console.log("Parent---beforeUnmount---3.x");
  },
  unmounted() {
    console.log("Parent---unmounted---3.x");
  },

  setup() {
    console.log("Parent---setup");

    const isShow = ref(true);
    const conut = ref(0);

    onBeforeMount(() => {
      console.log("Parent---onBeforeMount---3.x");
    });

    onMounted(() => {
      console.log("Parent---onMounted---3.x");
    });

    onBeforeUpdate(() => {
      console.log("Parent---onBeforeUpdate---3.x");
    });

    onUpdated(() => {
      console.log("Parent---onUpdated---3.x");
    });

    onBeforeUnmount(() => {
      console.log("Parent---onBeforeUnmount---3.x");
    });

    onUnmounted(() => {
      console.log("Parent---onUnmounted---3.x");
    });

    return {
      isShow,
      conut,
    };
  },
  name: "App",
  components: {
    Child,
  },
});
</script>

<style scoped>
</style>
