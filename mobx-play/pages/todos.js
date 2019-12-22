import store from './stores/todos'
import Todo from './models/todo'
import { observer } from 'mobx-react'
// import TodoItem from './components/TodoItem'

/**
 * Todo List (view)
 */
const TodoList = props => {

    let { todos = [] } = props

    return (
        <>
            <ul>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} />
                ))}
            </ul>
            Tasks left: {todos.unfinished}<br />
        </>
    )
}

const TodoItem = observer(({ todo }) => {
    console.log('todo:', todo);
    const { finished, toggleCompleted } = todo
    console.log(!!todo.toggleCompleted);
    
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

TodoList.getInitialProps = async function () {
    const tasks = ["Scour the oven", "Wash the cat", "Organize sock drawer", "Honey do-list"]
    console.log('store', store);
    console.log(tasks);
    tasks.forEach(task => store.todos.push(new Todo(task)))
    return {
        todos: store.todos
    }
}

export default TodoList