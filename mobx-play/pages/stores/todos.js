import { observable, autorun } from 'mobx'

var todoStore = observable({
    /* some observable state */
    todos: [],

    /* a derived value */
    get completed() {
        return this.todos.filter(todo => todo.finished).length
    },

    /* a derived value */
    get unfinished() {
        return this.todos.filter(todo => !todo.finished).length
    }
})

/* a function that observes the state */
autorun(function () {
    console.log("Completed %d of %d items", todoStore.completed, todoStore.todos.length)
})

export default todoStore