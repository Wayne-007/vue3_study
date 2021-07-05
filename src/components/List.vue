<template>
  <ul class="todo-main">
    <Item />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Item from "./Item.vue";

export default defineComponent({
  components: {
    Item,
  },
  name: "List",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
