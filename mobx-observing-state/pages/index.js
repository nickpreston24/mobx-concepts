import { observable, decorate, computed } from "mobx";
import { observer } from "mobx-react";

class Todo {
  constructor(title) {
    this.title = title
  }
  id = Math.random()
  @observable title = ""
  @observable finished = false
}

class TodoList {
  @observable todos = []
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }
}

const TodoItem = observer(({ todo }) => {

  function handleClicked() { todo.finished = !todo.finished }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        // onChange={handleClicked}
        onClick={handleClicked}
      />
      {todo.title}
    </li>)
})

var list = new TodoList();
list.todos.push(new Todo("Clean your room"))

const TodoListView = (props) => {

  let { todos } = props.todoList;

  return (
    <div>
      <h2>Stuff to do:</h2>
      <ul>
        {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
      </ul>
      Tasks remaining: {props.todoList.unfinishedTodoCount}
    </div>
  )
}

const Home = () =>
  <div>
    <h1>Todo List</h1>
    <TodoListView todoList={list} />
  </div>

export default Home

