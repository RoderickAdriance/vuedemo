<template>
    <div>
      <ul id="example-1">
        <li v-for="item in items">
          {{ item.message }}
        </li>
      </ul>

      <ul id="example-2">
        <li v-for="(item, index) in items">
          {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
      </ul>

      <ul id="v-for-object" class="demo">
        <li v-for="value in object">
          {{ value }}
        </li>
      </ul>

      <div v-for="(value, key, index) in object">
        {{ index }}. {{ key }}: {{ value }}
      </div>
    </div>
</template>

<script>
    export default {
        name: "ForDemo",
      data(){
          return{
            parentMessage: 'Parent',
            object: {
              firstName: 'John',
              lastName: 'Doe',
              age: 30
            },
            items: [
              { message: 'Foo' },
              { message: 'Bar' }
            ]
          }
      }
    }
</script>

<style scoped>

</style>
