<template>
  <button @click="modalShow = true">打开对话框</button>

  <!-- 对话框弹窗 -->
  <Teleport to="body">
    <div v-if="modalShow" class="modal">
      <div>
        <p>对话框</p>
        <button @click="modalShow = false">关闭对话框</button>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MoadlButton",
  setup() {
    const modalShow = ref(false);
    return { modalShow };
  },
});
</script>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal div {
  width: 280px;
  background-color: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 6px;
}
</style>
