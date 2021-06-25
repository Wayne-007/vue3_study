<template>
  <h2>Child子级组件</h2>
  <p>{{ msg }}</p>
  <button @click="emitXXX">更新数据</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Child",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  //   setup(props, context) {
  setup(props, { attrs, slots, emit }) {
    //   props参数：
    // 是一个对象，里面有父级组件向子级组件传递的数据，并且是在子级组件中使用props接收到的所有的属性
    // 包含props配置声明且传入了的所有属性的对象

    // context==>{attrs,emit}
    // 是一个对象，里面有attrs对象（获取当前组件标签上所有的属性的对象，但是该属性是在props中没有声明接收的所有的尚需经的对象），emit方法（分发事件），slots对象（插槽）
    // attrs：包含没有在props配置中声明的属性的对象，相当于this.$attrs
    // slots：包含所有传入的插槽内容的对象，相当于this.$slots
    // emit：用来分发自定义事件的函数，相当于this.$emit

    // console.log("Child:setup===>", props, context);
    console.log("Child:setup===>", props, attrs, slots, emit);

    function emitXXX() {
      //   context.emit("xxx", "++");
      emit("xxx", "++");
    }

    return {
      emitXXX,
    };
  },
});
</script>

<style scoped>
</style>
