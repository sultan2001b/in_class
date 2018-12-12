 

export default class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email
        // console.log("A person was born", name);
    }
    sayHi() {
        console.log(`Hi there! i am ${this.name}`)
    }
}