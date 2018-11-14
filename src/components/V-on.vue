<template>
  <div id="example-1">
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>

      <!-- `greet` 是在下面定义的方法名 -->
      <button v-on:click="greet">Greet</button>

    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>

    <!--用特殊变量 $event 把它传入方法: 原生DOM事件传递-->
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>

  </div>


</template>

<script>
    export default {
        name: "V-on",
      data(){
          return{
            title: 'Vue.js',
            counter: 0
          }
      },
      methods: {
        warn: function (message, event) {
          // 现在我们可以访问原生事件对象
          if (event) event.preventDefault()
          alert(message)
        },
        greet: function (event) {
          // `this` 在方法里指向当前 Vue 实例
          alert('Hello ' + this.title + '!')
          // `event` 是原生 DOM 事件
          if (event) {
            alert(event.target.tagName)
          }
        },
        say: function (message) {
          alert(message)
        }
      }
    }
</script>

<style scoped>

</style>
