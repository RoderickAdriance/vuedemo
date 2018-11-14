<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->

      <router-link to="/user/123">Go to user</router-link>
      <!--<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>-->
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view/>   <!--default默认视图-->
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
