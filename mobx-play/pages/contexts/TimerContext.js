import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

export const TimerContext = React.createContext()

/** The Timer (view) */
const Timer = observer(() => {
    const timerState = useContext(TimerContext)
    return <span>Seconds passed: {timerState.secondsPassed} </span>
})

/** Observed time */
const time = observable({
    secondsPassed: 0
})

/**Start timer */
setInterval(() => {
    time.secondsPassed++
}, 1000)

/** Injects an existing Timer into any Consumer */
const TimerProvider = (props) => {
    return (
        <TimerContext.Provider value={time}>
            {/* Other renders (views) */}
            {props.children}
            {/* Injected timer view */}
            <Timer />
        </TimerContext.Provider>
    )
}

export default TimerProvider