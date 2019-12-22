import { observer } from 'mobx-react'
import { observable } from 'mobx'

/**
 * Todo Item (render)
 */
const TodoItem = observer(({ todo }) => {
    const { finished, toggleCompleted } = todo

    return (
        <>
            <li>
                <input
                    type="checkbox"
                    checked={todo.finished}
                    onClick={todo.toggleCompleted}
                />
                {todo.title}<br />
            </li>
        </>
    )
})


export default TodoItem
