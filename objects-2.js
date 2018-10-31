const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];

const makeStudentReport = (data) => {

    const grades = data.map(student => `${student.name}: ${student.grade}`)

    return grades;
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
        student.name;
        student.course;
        student.status = 'In Summer School';
    });
    return students;
}

console.log(enrollInSummerSchool(studentData));

