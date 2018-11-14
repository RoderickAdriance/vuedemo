<template>
  <div id="demo">{{ fullName }}</div>
</template>

<script>
    export default {
        name: "WatchDemo",
      data(){
          return{
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar'
          }
      },
      watch: {
        firstName: function (val) {
          this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
          this.fullName = this.firstName + ' ' + val
        }
      }
    }
</script>

<style scoped>

</style>
