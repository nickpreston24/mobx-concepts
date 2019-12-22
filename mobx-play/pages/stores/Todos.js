import { observable, action, computed, autorun } from 'mobx'
import Todo from '../models/Todo'

class TodoStore {

    constructor(initialTodos = []) {
        this.todos.push.apply(this.todos, initialTodos.map(t => new Todo(t)))
    }
    /* some observable state */
    @observable todos = []

    /* a derived value */
    @computed get completed() {
        return this.todos.filter(todo => todo.finished).length
    }

    /* a derived value */
    @computed get unfinished() {
        // console.log('calling unfinished()');
        return this.todos.filter(todo => !todo.finished).length
    }

    /** A function which modifies state */
    @action add(todoTitle) {
        this.todos.push(new Todo(todoTitle))
    }
}

/**Dummy data */
const tasks = ["Scour the oven", "Wash the cat", "Organize sock drawer", "Honey do-list"]
export const todoStore = new TodoStore(tasks)

/* a function that observes the state */
autorun(function () {
    const { completed, todos } = todoStore
    const total = todos.length
    console.log("Completed %d of %d items", completed, total)
    if (completed >= total)
        console.info("All done!")
})

export default TodoStore