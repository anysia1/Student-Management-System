const students = require('../DB/students');

// Function to get all students
function getAllStudents() {
  return students;
}

// Function to add a new student
function addStudent(student) {
  students.push(student);
}

// Function to delete a student by ID
function deleteStudentById(id) {
  const index = students.findIndex(student => student.id === id);
  if (index !== -1) {
    students.splice(index, 1);
  }
}

// Function to update a student by ID
function updateStudentById(id, updatedStudent) {
  const index = students.findIndex(student => student.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...updatedStudent };
  }
}

module.exports = {
  getAllStudents,
  addStudent,
  deleteStudentById,
  updateStudentById
};