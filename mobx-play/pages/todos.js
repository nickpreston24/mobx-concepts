import { observable, computed } from "mobx"
import { observer } from 'mobx-react'

// @observer
const TodosView = observer((props) => {
    return (
        <div>
            <ul>
                {props.todos && props.todoList.todos
                    .map(todo => (
                        <TodoItem todo={todo} key={todo.id} />
                    ))
                }
            </ul>
            Tasks left: {this.props.todoList.unfinished}
        </div>
    )
})

const TodoItem = observer(({ todo }) => (
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => (todo.finished = !todo.finished)}
        />
        {todo.title}
    </li>
))

class TodoList {
    @observable todos = []
    @computed get unfinished() {
        return this.todos.filter(todo => !todo.finished).length
    }
}

class Todo {
    id = Math.random()
    @observable title = ""
    @observable finished = false
}

export default TodosView