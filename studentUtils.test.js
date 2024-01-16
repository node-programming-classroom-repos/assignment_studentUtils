// studentUtils.test.js
const { calculateAverageGrade, identifyTopStudents, sortStudentsByGrade } = require('./studentUtils');

const studentResults = [
    { name: "Anna", grade: 75 },
    { name: "Erik", grade: 88 },
    { name: "Maja", grade: 92 },
    { name: "Sven", grade: 68 },
    { name: "Oskar", grade: 100 },
    { name: "Ebba", grade: 98 },
    { name: "Hanna", grade: 78 },
    { name: "Adam", grade: 81 },
    { name: "Ida", grade: 61 },
    { name: "Viktor", grade: 72 },
    { name: "Elsa", grade: 49 },
    { name: "Axel", grade: 82 },
    { name: "Maria", grade: 88 },
    { name: "Olle", grade: 95 },
    { name: "Ingrid", grade: 86 },
    { name: "Johan", grade: 91 },
    { name: "Klara", grade: 76 },
    { name: "Filip", grade: 84 },
    { name: "Karin", grade: 89 },
    { name: "Olof", grade: 83 }
  ];

describe('Test student utilities', () => {
  test('calculateAverageGrade should return correct average', () => {
    const average = calculateAverageGrade(studentResults);
    expect(average).toBeCloseTo(81.8);
  });

  test('identifyTopStudents should return students with grade >= 90', () => {
    const topStudents = identifyTopStudents(studentResults, 90);
    const expected = ["Maja", "Oskar", "Ebba", "Olle", "Johan"];
    expect(topStudents.map(student => student.name)).toEqual(expect.arrayContaining(expected));
  });

  test('sortStudentsByGrade should sort students in descending order', () => {
    const sortedStudents = sortStudentsByGrade(studentResults);
    expect(sortedStudents[0].name).toBe("Oskar"); // expecting the student with the highest grade to be first
    expect(sortedStudents[sortedStudents.length - 1].name).toBe("Elsa"); // expecting the student with the lowest grade to be last
});
});
