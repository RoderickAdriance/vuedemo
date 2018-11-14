<template>
  <div>
    <router-link to="/bar">Go to Bar</router-link>
    <router-link to="/compute">Compute</router-link>
    <router-link to="/watchdemo">Watch</router-link>
    <router-link to="/ifdemo">If</router-link>
    <router-link to="/fordemo">For</router-link>
    <router-link to="/von">V-on</router-link>
    <router-link to="/form">Vue-Form</router-link>
    <router-view/>

    <!--可以随意添加组件-->
    <!--   <PropsDemo title="My journey with Vue"></PropsDemo>
       <PropsDemo title="Blogging with Vue"></PropsDemo>
       <PropsDemo title="Why Vue is so fun"></PropsDemo>-->
    <PropsDemo
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
      v-bind:author=author
    ></PropsDemo>

    <Slotdemo url="/www.baidu.com">
      百度
    </Slotdemo>

  </div>
</template>

<script>
  import PropsDemo from "./components/PropsDemo";
  import Slotdemo from "./components/Slotdemo";
  import Compute from "./components/Compute";


  export default {
    name: "Demo",
    components: {Slotdemo, PropsDemo},//注册自己用到的组件
    data() {
      return {
        author: { name: Compute.data().aaa, company: 'Veridian Dynamics' },
        posts: [
          {id: 1, title: 'My insides all turn to ash'},
          {id: 2, title: 'Blogging with Vue'},
          {id: 3, title: 'Why Vue is so fun'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
