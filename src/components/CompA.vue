<template>
  <div class="comp-a">
    <div class="message">
      {{ sharedState.message }}
    </div>

    <button type="button" @click="setNewMessageValue">Change message</button>
  </div>

</template>

<script>
import store from '../store';

export default {
  data() {
    return {
      sharedState: store.state
    }
  },

  methods: {
    setNewMessageValue() {
      store.setMessageAction('Foo')
    }
  }
  
}
</script>

<style scoped>
.comp-a {
  border: 2px solid red;
}
</style>