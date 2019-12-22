/** Sample usage:
* var todoStore = storeSelector.getStore("TodoStore")
* console.log(todoStore.completed);
*/
export default class StoreSelector {
    constructor(stores) {
        Object.assign(this, { stores })
        // console.log('Initial collection: ', this);
    }

    getStore = (key) => {
        console.log(`Looking for ${key}...`, Object.keys(this.stores));

        if (Object.keys(this.stores).includes(key)) {
            console.log(`Found the ${key} store!`);
            return this.stores[key];
        }

        /**TODO: dynamically new-up an instance by key,
         *  e.g. key = 'SoupStore';
         * var soup = createStore('SoupStore')
        **/
    };
}