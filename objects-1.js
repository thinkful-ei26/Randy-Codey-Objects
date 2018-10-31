const createMyObject = () => {

    return {
        foo: 'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello: () => 'hello'
    }
}

const newObj = createMyObject();


const updateObject = (obj) => {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';

    return obj;
}

updateObject(newObj);


function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function() { return `${this.firstName} ${this.lastName}`},
    };
    return person;
  }

  const person = personMaker();
  console.log(person.fullName());


const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
    };

    function keyDeleter(obj) {
    // your code here
    delete obj.foo;
    delete obj.bar;

    return obj;
}

console.log(keyDeleter(sampleObj));