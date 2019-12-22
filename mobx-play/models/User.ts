export default class User {
    fullName: string
    constructor(public first: string, public last: string, public middle: string) {
        this.fullName = `${first} ${middle} ${last}`
    }
}