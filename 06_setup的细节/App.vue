<template>
  <h2>App父级组件</h2>
  <p>{{ msg }}</p>
  <button @click="msg += '==·'">更新数据</button>
  <hr />
  <Child :msg="msg" @xxx="xxx" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// 引入子级组件
import Child from "./components/Child.vue";
export default defineComponent({
  // setup细节问题：
  // setup是在beforeCreated生命周期回调之前就执行了，而且就执行一次
  // 由上可推断初：setup在执行的时候，当前的组件还没有创建出来，也就意味着——组件实例对象this根本就不能用
  // this是undefined，说明：不能通过this再去调用data/computed/methods/props中的相关内容了
  // 其实所有的composition API相关回调函数中也都不可以

  // setup中的返回值是一个对象，内部的属性和方法是给html模板使用的
  // setup中的对象内部的属性和data函数中的return对象的属性都可以在html模板中使用
  // setup中的对象中的属性和data函数中的对象中的属性会合并为组件对象的属性
  // setup中的对象中的方法和methods对象中的方法会合并为组件对象的方法
  // 在Vue3中尽量不要混合的使用data和setup及methods和setup，setup不能访问data和methods
  // setup不能是一个async函数：因为返回值不再是return的对象，而是Promise，模板看不到return对象中的属性数据

  // 数据初始化的生命周期回调
  beforeCreate() {
    console.log("beforeCreate===>");
  },

  // 界面渲染完毕
  mounted() {
    console.log("mounted：this===>", this);
  },
  setup() {
    console.log("setup：this===>", this);
    const msg = ref("这是一个字符串");
    const showMessage2 = () => {
      console.log("showMessage2===>");
    };

    const xxx = (text: string) => {
      msg.value += text;
    };

    return {
      // setup中一般都是返回一个对象，对象中的属性和方法都可以在html模板中直接使用
      msg,
      showMessage2,
      xxx,
    };
  },
  methods: {
    showMessage1() {
      console.log("showMessage1===>");
    },
  },
  data() {
    return {
      msg2: "value",
    };
  },
  name: "App",
  components: {
    Child,
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
