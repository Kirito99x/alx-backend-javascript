/**
 * Retrieves the sum of ids of a list of students.
 * @param {Array} students - The list of students.
 * @returns {Number} - The sum of student ids.
 */
export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0
    );
  }
  return 0;
}
