import { observable, action } from "mobx"

// Minimalistic observable :3
var state = observable({ count: 0 })
state.increment = () => state.count++; // Can't use the 'this' keyword
state.decrement = () => state.count--;

export default state