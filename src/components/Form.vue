<template>
  <form>
    <div class="form-field" v-for="(field, index) in fields">
        <label>{{ field.label }}</label>
        <input :type="field.type" :name="field.name" v-model="field.modelName" :readonly="field.readonly">
    </div>
    <div class="form-field">
        <label>Drop down box</label>
        <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
        </select>
    </div>
    <div class="form-field">
        <label>Radio Box</label>
        <label><input type="radio" name="gender">Male</label>
        <label><input type="radio" name="gender">Female</label>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
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
        {type: 'text', label: 'Age', name: 'AGE', modelName: 'age', readonly: true}
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
