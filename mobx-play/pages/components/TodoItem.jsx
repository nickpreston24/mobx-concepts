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
                    checked={finished}
                    onClick={toggleCompleted}
                />
                {todo.title}
            </li>
        </>
    )
})

export default TodoItem
