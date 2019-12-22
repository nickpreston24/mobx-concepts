import { observer } from 'mobx-react'

/**
 * Todo Item (render)
 */
const TodoItem = observer(({ todo }) => {
    const { finished, toggleCompleted } = todo

    return (
        <>
            <input
                type="checkbox"
                checked={finished}
                onClick={toggleCompleted}
            />
            {todo.title}<br />
        </>
    )
})


export default TodoItem
