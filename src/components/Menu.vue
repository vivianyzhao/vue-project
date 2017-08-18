<template>
    <nav>
      <ul>
        <li v-for="(item, index) in items">
            <router-link :to="item.to">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {to: '/', name: 'Home'},
        {to: 'test', name: 'Test Table'},
        {to: 'form', name: 'Test Form'},
        {to: '/', name: 'Test 1'},
        {to: '/', name: 'Test 2'},
        {to: '/', name: 'Test 3'},
        {to: '/', name: 'Test 4'}
      ]
    }
  }
}
</script>

<style scoped>
nav {
  background-color: #64b6fd;
}

ul {
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

ul > li {
  float: left;
  border: 1px solid black;
}

ul > li > a {
  display: block;
  width: 10em;
}

ul > li > a:hover {
  background-color: blue;
  color: white;
}
</style>