<template>
  <div>
    <h1  v-if="ok">Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <div v-if="Math.random() > 0.5">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>
  </div>
</template>

<script>
    export default {
      name: "Ifdemo",
      data(){
          return{
            ok: true
          }
      }
    }
</script>

<style scoped>

</style>
