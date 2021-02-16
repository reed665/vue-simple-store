const store = {
  debug: true,
  state: {
    message: "Привет!"
  },
  setMessageAction(newValue) {
    if (this.debug) console.log("setMessageAction вызвано с ", newValue);
    this.state.message = newValue;
  },
  clearMessageAction() {
    if (this.debug) console.log("clearMessageAction вызвано");
    this.state.message = "";
  }
}

export default store;
