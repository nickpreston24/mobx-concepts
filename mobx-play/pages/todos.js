import { observer } from 'mobx-react'
import TodoItem from './components/TodoItem'
import Layout from './components/Layout'
import { todoStore } from './stores/Todos'

/**
 * Todo List (view)
 */
const TodoList = observer(({ store }) => {

    const todos = store.todos || []

    function submitTodo() {
        var input = document.getElementById('#todo')
        const text = input.value
        store.add(text)
        input.value = null

    }

    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            submitTodo();
        }
    }

    return (
        <Layout>
            <form>
                <input id="#todo" type="text" onKeyDown={handleKeyDown} ></input><br />
                {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
                Tasks left: {store.unfinished}<br />
            </form>
        </Layout>
    )
})

/**Next JS' awesome data fetching func */
TodoList.getInitialProps = async function () {
    return {
        store: todoStore
    }
}

export default TodoList
