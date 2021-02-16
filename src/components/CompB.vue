<template>
  <div class="comp-a">
    <div class="message">
      {{ message }}
    </div>

    <button type="button" @click="setNewMessageValue">Change message</button>
  </div>

</template>

<script>
import { message, setMessageAction } from '../store'

export default {
  setup() {
    const setNewMessageValue = () => {
      setMessageAction('Bar')
    }

    return {
      message,
      setNewMessageValue
    }
  }
  
}
</script>

<style scoped>
.comp-a {
  border: 2px solid blue;
}
</style>