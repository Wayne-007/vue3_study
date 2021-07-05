<template>
  <h2>Child子级组件</h2>
  <p>msg:{{ msg }}</p>
  <p>count:{{ count }}</p>
  <button @click="update">更新数据</button>
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

interface IProps {
  count: number;
}

export default defineComponent({
  // vue2.x的生命周期钩子
  beforeCreate() {
    console.log("Child---beforeCreate---2.x");
  },
  created() {
    console.log("Child---created---2.x");
  },
  beforeMount() {
    console.log("Child---beforeMount---2.x");
  },
  mounted() {
    console.log("Child---mounted---2.x");
  },
  beforeUpdate() {
    console.log("Child---beforeUpdate---2.x");
  },
  updated() {
    console.log("Child---updated---2.x");
  },
  beforeUnmount() {
    console.log("Child---beforeUnmount---3.x");
  },
  unmounted() {
    console.log("Child---unmounted---3.x");
  },

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  setup(props: IProps) {
    // console.log("Child---setup", props.count);

    const msg = ref("abc");
    function update() {
      msg.value += "-->";
    }

    onBeforeMount(() => {
      console.log("Child---onBeforeMount---3.x");
    });

    onMounted(() => {
      console.log("Child---onMounted---3.x");
    });

    onBeforeUpdate(() => {
      console.log("Child---onBeforeUpdate---3.x");
    });

    onUpdated(() => {
      console.log("Child---onUpdated---3.x");
    });

    onBeforeUnmount(() => {
      console.log("Child---onBeforeUnmount---3.x");
    });

    onUnmounted(() => {
      console.log("Child---onUnmounted---3.x");
    });

    return {
      msg,
      update,
    };
  },
  name: "Child",
});
</script>

<style scoped>
</style>
