<template>
  <h2>reactive的使用</h2>
  <p>姓名：{{ user.name }}</p>
  <p>年龄：{{ user.age }}</p>
  <p>性别：{{ user.gender }}</p>
  <p>媳妇：{{ user.wife }}</p>

  <button @click="updataUser">修改信息</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

// 暴露出去一个定义好的组件
export default defineComponent({
  name: "App",

  // 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息数据

  // reactive
  // 作用：定义多个数据的响应式
  // const proxy = reactive(obj)：接收一个 普通对象 然后返回该 普通对象 的 响应式代理器对象
  // 响应式转换是“深层的”；会影响对象内部所有的嵌套的属性
  // 内部基于ES6的Proxy实现，通过 代理对象 操作 源对象 内部数据都是响应式的

  setup() {
    // const obj: any = {
    const obj = {
      name: "小明",
      age: 20,
      wife: {
        name: "小乔",
        age: 18,
        cars: ["奔驰", "宝马", "奥迪"],
      },
    };
    // 把数据变成响应式数据
    // 返回的是一个Proxy的代理对象，被代理的目标对象就是obj对象
    const user = reactive<any>(obj);

    const updataUser = () => {
      // 直接使用目标对象的方式来更新目标对象中的成员的值，是不可能的，只能使用代理对象的方式来更新数据（响应式数据）
      // obj.name += "--";
      // 正确的更新方式
      // user.name += "==";
      // user.age += 2;
      // user.wife.cars[0] = "玛莎拉蒂";
      // user--->代理对象，obj--->目标对象
      // user对象或者obj对象添加一个新的属性，哪一种方式会影响界面更新
      // obj.gender = "男";
      // user.gender = "男";
      // user对象或者是obj对象移除一个新的属性，哪一种方式会影响界面更新
      // delete obj.age
      // delete user.age
      // 总结：如果操作代理对象，目标对象中的数据也会随之变化，同时如果想要在操作数据的时候，界面也要跟着重新更新渲染
    };

    return {
      user,
      updataUser,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
