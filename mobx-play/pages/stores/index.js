import StoreSelector from './StoreSelector'
import TodoStore from './Todos'

/**TODO: load this from file, similar to how SMU wired up apiRoutes with one index.js file */
// const stores = [TodoStore]
const storeMap = { TodoStore: new TodoStore() }

//TODO: Make this a Singleton instance; only re-instantiate when null
const storeSelector = new StoreSelector(storeMap)

export default storeSelector

export {
    TodoStore,
}