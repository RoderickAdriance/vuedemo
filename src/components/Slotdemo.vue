<template>
    <div>
      <a
        v-bind:href=url
        class="nav-link"
      >
        <!--加入Slotdemo标签内的内容-->
        <slot>默认</slot>
      </a>
    </div>
</template>

<script>
    export default {
        name: "Slotdemo",
      props:['url']
    }
</script>

<style scoped>

</style>
