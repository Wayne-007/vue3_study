<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input
      type="text"
      placeholder="请输入姓氏"
      v-model="user.firstName"
    /><br />
    名字：<input
      type="text"
      placeholder="请输入名字"
      v-model="user.lastName"
    /><br />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input
      type="text"
      placeholder="显示名字"
      disabled
      :value="fullName1"
    /><br />
    姓名：<input type="text" placeholder="显示名字" v-model="fullName2" /><br />
    姓名：<input
      type="text"
      placeholder="显示名字"
      v-model="fullName3"
      disabled
    /><br />
  </fieldset>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  watch,
  ref,
  watchEffect,
} from "vue";

export default defineComponent({
  setup() {
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
    });

    // vue3的计算属性
    // 计算属性的函数中如果只传入宇哥回调函数，表示的是get
    // 如果要set，就传入一个对象

    // 第一个姓名
    const fullName1 = computed(() => {
      return `${user.firstName}_${user.lastName}`;
    });
    // 返回的是Ref类型
    console.log("fullName1===>", fullName1);

    // 第二个姓名
    const fullName2 = computed({
      get() {
        return `${user.firstName}_${user.lastName}`;
      },
      set(val: string) {
        // console.log("fullName2:computed:set===>", val);
        const names = val.split("_");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });

    // 第三个姓名：
    const fullName3 = ref("");
    // 监视——监视指定的数据
    watch(
      user,
      ({ firstName, lastName }) => {
        console.log("firstName, lastName");
        fullName3.value = `${firstName}_${lastName}`;
      },
      {
        immediate: true, //  立即监听
        deep: true, //  深度监听
      }
    );

    // 监视——不需要配置immediate，本身默认就会进行监视，（默认执行一次）
    // watchEffect(() => {
    //   fullName3.value = `${user.firstName}_${user.lastName}`;
    // });

    watchEffect(() => {
      const names = fullName3.value.split("_");
      user.firstName = names[0];
      user.lastName = names[1];
    });

    // watch——可以监视多个数据的
    // watch([user.firstName, user.lastName], () => {
    //   // 这里的代码没有执行，user.firstName, user.lastName不是响应式的数据
    //   console.log("---");
    // });

    watch([user.firstName, user.lastName, fullName3], () => {
      // 这里的代码有执行，fullName3是响应式的数据
      console.log("~~~");
    });

    // 如果要watch监听非响应式的数据，需要写成回调函数式
    watch([() => user.firstName, () => user.lastName], () => {
      console.log("+++");
    });

    return {
      fullName1,
      fullName2,
      fullName3,
      user,
    };
  },
});
</script>

<style scoped>
</style>

