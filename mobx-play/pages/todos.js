import TodoStore from './stores/todos'
import Todo from './models/todo'
import { observer } from 'mobx-react'
import TodoItem from './components/TodoItem'
import Link from 'next/link'

/**
 * Todo List (view)
 */
const TodoList = observer(({ store }) => {
    const todos = store.todos || []

    return (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <ul>
                {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
            </ul>
            Tasks left: {store.unfinished}<br />
        </>
    )
})


TodoList.getInitialProps = async function () {
    const tasks = ["Scour the oven", "Wash the cat", "Organize sock drawer", "Honey do-list"]
    const store = new TodoStore()
    tasks.forEach(task => store.todos.push(new Todo(task)))

    return {
        store: store
    }
}

export default TodoList