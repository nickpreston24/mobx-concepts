import { observable, action, when } from "mobx"

// Minimalistic observable :3
var state = observable({ count: 0 })
state.increment = () => state.count++; // Can't use the 'this' keyword
state.decrement = () => state.count--;

function isTooHigh(number) {
    return number >= 10
}

when(
    () => isTooHigh(state.count),
    () => {
        alert(`${state.count} is too high!`)
        state.decrement() //FIXME: when() only fires once....
        // state.decrement()
        // state.decrement()
        // state.decrement()
    }
)

export default state