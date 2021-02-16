// ex11_2.js - Ayelet Danieli - Methods.

const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  getTeachers: function () {
    return this.teachers;
  },

  // 1. A method called “assignStudent” that takes two
  // arguments, a student’s id and a subject.
  // Assign all of the students to the first available teacher who
  // teaches that subject and who is not in full capacity. If all of
  // the teachers are in full capacity log to the console “Sorry,
  // no available teachers left”.
  assignStudent: function (id, subject) {
    let teachers = this.getTeachers();
    let availabeTeacher = this.teachers.find(function (teacher) {
      return teacher.subjects.includes(subject) && teacher.capacityLeft > 0;
    });
    if (!availabeTeacher) {
      console.log("Sorry, no available teacher left");
      return;
    }
    let student = this.students.find((s) => s.id === id);
    availabeTeacher.students.push(JSON.stringify(student));
    availabeTeacher.capacityLeft--;
  },

  // 2. A method called “assignTeachersSubject” that takes two
  // arguments, the teacher’s id, a new subject.
  // Assign the new subject to that particular teacher if that
  // subject doesn’t exist in their array of subjects
  assignTeachersSubject: function (teacherID, newSubject) {
    let teachers = this.getTeachers();
    let teacher = teachers.find((t) => t.id === teacherID);
    if (!teacher) return;
    if (!teacher.subjects.includes(newSubject))
      teacher.subjects.push(newSubject);
  },

  // 3. Create a new method of anything you want
  getStudentsAvgAge: function () {
    let students = this.students;
    if (students.length < 1)
      return -1;
    
    const sum = students.map(s => s.age).reduce((a,b) => a+b,0);
    return sum / students.length;
  },
};

school.assignStudent(12, "history");
school.assignStudent(10, "history");
console.log("after assigments of 2 students: ", school.getTeachers());

// 3. Create a new method of anything you want
console.log("get average age of students: ", school.getStudentsAvgAge());

// // How to use reduce on object by key
// var o = { 
//     a: {value:1}, 
//     b: {value:2}, 
//     c: {value:3} 
// };
// Object.keys(o).reduce(function (previous, key) {
//     return previous + o[key].value;
// }, 0);