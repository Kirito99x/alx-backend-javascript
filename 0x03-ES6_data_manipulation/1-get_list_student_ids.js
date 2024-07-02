/**
 * Retrieves the IDs from a list of students.
 * @param {Array} students - The list of students.
 * @returns {Array} - The array of student IDs.
 */
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((student) => student.id);
  }
  return [];
}
