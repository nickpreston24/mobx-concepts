import { observer } from 'mobx-react'

const styles = {
    counter: {
        color: '#af5'
    },
}

const Counter = observer(({ state }) => {

    const { increment, decrement } = state
    const { counter } = styles

    return (
        <div>
            <b style={counter}>Count: {state.count}</b> <br />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
})

export default Counter