<template>
  <div>
    <!-- 阻止单击事件继续传播 -->
    <a v-on:click.stop="doThis"></a>

    <!-- 点击事件将只会触发一次 -->
    <a v-on:click.once="doThis"></a>

    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>

    <!-- 修饰符可以串联 -->
    <a v-on:click.stop.prevent="doThat"></a>

    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>

    <!-- 添加事件监听器时使用事件捕获模式 -->
    <!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
    <div v-on:click.capture="doThis">...</div>

    <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
    <!-- 即事件不是从内部元素触发的 -->
    <div v-on:click.self="doThat">...</div>

    <!--这其中包含 `event.preventDefault()` 的情况
    不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。
    请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。-->
    <div v-on:scroll.passive="onScroll">...</div>

  </div>
</template>

<script>
    export default {
        name: "Incident"
    }
</script>

<style scoped>

</style>
