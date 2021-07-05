<template>
  <h2>hooks的使用：鼠标点击任意位置显示x，y轴坐标</h2>
  <p>x：{{ x }}</p>
  <p>y：{{ y }}</p>

  <br />
  <div v-if="loading">加载中...</div>
  <div v-else-if="errorMsg">错误信息：{{ errorMsg }}</div>
  <div v-else>
    <ul>
      <li>id：{{ data.id }}</li>
      <li>地址：{{ data.address }}</li>
      <li>距离：{{ data.distance }}</li>
    </ul>
  </div>
  <hr />
  <div>
    <ul v-for="item in data" :key="item.id">
      <li>id:{{ item.id }}</li>
      <li>title:{{ item.title }}</li>
      <li>price:{{ item.price }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";

// interface Address {
//   id: number;
//   address: string;
//   distance: string;
// }

interface Products {
  id: string;
  titile: string;
  price: string;
}

export default defineComponent({
  setup() {
    const { x, y } = useMousePosition();

    // const { loading, data, errorMsg } = useRequest<Address>(
    //   "/data/address.json"
    // );
    const { loading, data, errorMsg } = useRequest<Products[]>(
      "/data/products.json"
    );

    watch(data, () => {
      if (data && data.value) console.log(data.value.length);
    });

    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>

<style scoped>
</style>
