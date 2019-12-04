<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import {aaa, bbb } from '../base/api/test1.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '动态生成api接口'
    }
  },
  mounted () {
    aaa({aa: 12, bb:13}).then(res => {

    });
    bbb({aa: 12, bb:13}).then(res => {

    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
