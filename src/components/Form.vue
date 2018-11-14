<template>
  <div>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <br>

    <!-- 在“change”时而非“input”时更新 -->
    <input v-model.lazy="message" >    <br>

    <!--输入值转为数值类型-->
    <input v-model.number="age" type="number"> <br>

    <!--自动过滤用户输入的首尾空白字符-->
    <input v-model.trim="msg"><br>

    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>


    <div>
      <br>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
    </div>

    <div>
      <br>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <div>
      <br>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>

    <div>
      <br>
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>

    <div>
      <br>
      <select v-model="selected" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selected }}</span>
    </div>


    <div>
      <br>
      <select v-model="se">
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ se }}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Form",
      data(){
          return{
            se: 'A',
            options: [
              { text: 'One', value: 'A' },
              { text: 'Two', value: 'B' },
              { text: 'Three', value: 'C' }
            ],
            selected: '',
            picked: '',
            checkedNames: [],
            message: '',
            checked: false
          }
      }
    }
</script>

<style scoped>

</style>
