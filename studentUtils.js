// studentUtils.js

function calculateAverageGrade(students) {
  let total = 0;
  students.forEach(student => {
    total += student.grade;
  });
  return total / students.length;
}

function identifyTopStudents(students, threshold) {
  return students.filter(student => student.grade >= threshold);
}

function sortStudentsByGrade(students) {
  return students.slice().sort((a, b) => b.grade - a.grade);
}

module.exports = { calculateAverageGrade, identifyTopStudents, sortStudentsByGrade };
