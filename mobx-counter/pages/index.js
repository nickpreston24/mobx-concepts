import { observable, action } from "mobx"
import { observer } from 'mobx-react'

// Minimalistic observable :3
var state = observable({ count: 0 })
state.increment = () => state.count++; // Can't use the 'this' keyword
state.decrement = () => state.count--;

// @observer
const Home = observer(() => {
  const { increment, decrement } = state;

  return (
    <>
      <h1>Hello, World!</h1>
      <b>Count: {state.count}</b><br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
})

export default Home
