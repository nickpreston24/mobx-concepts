import { observable, action } from 'mobx'

class Todo {
    constructor(title = null) {
        Object.assign(this, { title })
        this.id = Math.floor(Math.random() * 1000)
        this.finished = false
    }
    @observable finished = false
    /** Using a bound action: https://mobx.js.org/refguide/action.html*/
    @action.bound toggleCompleted() {
        this.finished = !this.finished
    }
}

export default Todo