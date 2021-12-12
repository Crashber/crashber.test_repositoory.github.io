<template>
  <div>
    <md-toolbar class="md-primary">
        <md-title> Martins Webseite </md-title>
        
    </md-toolbar>

    <div id="app">
      <HelloWorld></HelloWorld>
      <Table></Table>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Table
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
