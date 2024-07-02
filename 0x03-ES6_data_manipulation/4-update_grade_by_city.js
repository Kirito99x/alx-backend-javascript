/**
 * Updates the grades of a list of students in a given city.
 * @param {Array} students - The list of students.
 * @param {string} city - The city of students.
 * @param {Array} newGrades - The new grades to be given to a student.
 * @returns {Array} - The updated list of students with their grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (Array.isArray(students)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
