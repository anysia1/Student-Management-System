const studentManagement = require('./student-management/studentManagement');

console.log('All Students:', studentManagement.getAllStudents());

const newStudent = {
    id : 6,
        name: "New Student",
        age: 23,
        level: 4,
        email: "Student@gmail.com",
};
studentManagement.addStudent(newStudent);
console.log('After Adding New Student:', studentManagement.getAllStudents());

const updatedInfo = { age: 23, email: "Student@gmail.com" };
studentManagement.updateStudentById(6, updatedInfo);
console.log('After Updating Student:', studentManagement.getAllStudents());

studentManagement.deleteStudentById(6);
console.log('After Deleting Student:', studentManagement.getAllStudents());
