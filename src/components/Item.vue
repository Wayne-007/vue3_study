<template>
  <li>
    <label>
      <input type="checkbox" />
      <span>xxxx</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Item",
  setup() {
    return {};
  },
});
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: left;
  display: none;
  margin-top: 3px;
}

li::before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
