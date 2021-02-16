<template>
  <div id="app">
    <CompA class="comp" />
    <CompB class="comp" />
  </div>
</template>

<script>
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'

export default {
  name: 'App',
  components: {
    CompA,
    CompB,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
}

.comp {
  flex: 1;
}
</style>
