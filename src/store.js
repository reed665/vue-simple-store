import { ref } from '@vue/composition-api'

const debug = true;

export const message = ref('Привет!')

export const setMessageAction = (newValue) => {
  if (debug) console.log("setMessageAction вызвано с ", newValue);
  message.value = newValue
}
export const clearMessageAction = () => {
  if (debug) console.log("clearMessageAction вызвано");
  message.value = ''
}
