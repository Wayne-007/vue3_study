<template>
  <p>age：{{ age }}</p>
  <p>length：{{ length }}</p>
</template>

<script lang="ts">
import { defineComponent, Ref, computed, toRef } from "vue";
function useGetLength(age: Ref) {
  return computed(() => age.value.toString().length);
}

export default defineComponent({
  name: "Child",
  props: {
    age: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const length = useGetLength(toRef(props, "age"));
    return {
      length,
    };
  },
});
</script>

<style scoped>
</style>
