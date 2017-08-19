<template>
  <form>
    <div class="form-field" v-for="(field, index) in fields">
        <label>{{ field.label }}</label>
        <edc-radio v-if="field.type === 'radio'" :name="field.name" :options="field.value"></edc-radio>
        <edc-select v-else-if="field.type === 'dropdown'" :name="field.name" :options="field.value"></edc-select>
        <input v-else :type="field.type" :name="field.name" :value="field.value" :readonly="field.readonly">

    </div>
  </form>
</template>

<script>
const Myradio = {
  template: '<div style="display: inline-block;vertical-align: top;"><label v-for="option in this.options"><input type="radio" :name="name" :value="option.key">{{ option. val }}</label></div>',
  props: ['name', 'options']
}
const Mydropdown = {
  template: '<select :name="name"><option v-for="option in options" :value="option.key">{{ option. val }}</option></select>',
  props: ['name', 'options']
}
export default {
  name: 'Form',
  components: {'edc-radio': Myradio, 'edc-select': Mydropdown},
  data () {
    function padLeft (str, pad, len) {
      str += ''
      while (str.length < len) {
        str = pad + '' + str
      }
      return str
    }
    const date = new Date()
    const today = date.getFullYear() + '-' + padLeft(date.getMonth() + 1, 0, 2) + '-' + padLeft(date.getDate(), 0, 2)
    return {
      fields: [
        {type: 'date', label: 'Start Date', name: 'DSDEDAT', modelName: 'today', readonly: false},
        {type: 'date', label: 'Birth Date', name: 'BRTHDAT', modelName: 'birthdate', readonly: false},
        {type: 'calc', label: 'Age', name: 'AGE', modelName: 'age', readonly: true},
        {type: 'radio', label: 'Gender', name: 'SEX', modelName: 'gender', readonly: false, value: [{key: '1', val: 'Male'}, {key: '2', val: 'Femal'}]},
        {type: 'dropdown', label: 'Gender', name: 'SEX', modelName: 'gender', readonly: false, value: [{key: '1', val: 'Male'}, {key: '2', val: 'Femal'}]}
      ],
      today: today,
      birthdate: ''
    }
  },
  computed: {
    age: function () {
      var moment = require('moment')
      var interval = this.birthdate.length === this.today.length ? moment(this.today).diff(this.birthdate, 'years') : ''
      return interval
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form > div {
    margin-left: 10em;
    padding: 1em;
    text-align: left;
}

form > div > label:first-child {
    display: inline-block;
    width: 10em;
}
</style>
