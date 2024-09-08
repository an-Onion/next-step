function myNew(constructor, ...args){
    const obj = Object.create(constructor.prototype);
    // obj.prototype = constructor.prototype;
    const result = constructor.apply(obj, args);
    return result instanceof Object ? result: obj;
}

function Person(name, id) {
    this.name = name;
    this.id = id;
}

Person.prototype.greet = function () {
    console.log('helll', this.name, this.id);
};

const person = myNew(Person, 'Onion', 1);
person.greet();