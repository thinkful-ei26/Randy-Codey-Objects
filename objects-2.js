const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];

const makeStudentReport = (data) => {
    return data.map(student => `${student.name}: ${student.grade}`);
}

//console.log(makeStudentReport(testData));


const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];

const enrollInSummerSchool = (students) => {
    students.forEach(student => {
        student.status = 'In Summer School';
    });
    return students;
}

//console.log(enrollInSummerSchool(studentData));


const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];

const findById = (items, idNum) => {
   return items.find( element => {
        if(element.id === idNum) {
            return element
        }
    });
}

//console.log(findById(scratchData, 28));


// should return `true`
const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };

  // should return `false`
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  
  const expectedKeys = ['id', 'name', 'age', 'city'];
  
  const validateKeys = (object, expectedKeys) => {
    if(Object.keys(object).length != expectedKeys.length) {
        return false;
    }
    expectedKeys.forEach(key => {
        if(!object.hasOwnProperty(key)) {
            return false;
        }
    })
    return true;
  }

  console.log(validateKeys(objectA, expectedKeys));
  console.log(validateKeys(objectB, expectedKeys));