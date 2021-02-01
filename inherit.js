class Parent{
    constructor(){
        this.fathername = "Lord";
    }
}
class Child extends Parent{
        constructor(name){
            super();
        this.name = name;
    }
    getFullName(){
        return this.name+ " " + this.name;
    }
}
const baby = new Child("Anup");
const baby2 = new Child("Anupoma");
console.log(baby.getFullName());
console.log(baby2.getFullName());