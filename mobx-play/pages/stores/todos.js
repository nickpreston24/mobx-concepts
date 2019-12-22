import { observable, autorun, computed } from 'mobx'

class TodoStore {
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
}

/* a function that observes the state */
// autorun(function () {
//     console.log("Completed %d of %d items", todoStore.completed, todoStore.todos.length)
// })

export default TodoStore