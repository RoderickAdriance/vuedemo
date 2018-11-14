<template>
  <div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div>
</template>

<script>
    export default {
        name: "Compute",
        data() {
          return{
            message: '信息',
            aaa: 'AAAAAAA'
          }
        },
      computed: {
        reversedMessage: function () {
          return this.message.split('').reverse().join('')
        }
      }
    }
</script>

<style scoped>

</style>
