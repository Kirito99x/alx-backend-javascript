/**
 * Returns students in a specified location.
 * @param {String} city - The location to filter by.
 * @returns {Array} - An array of students in the specified location.
 */
export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.location === city);
  }
  return [];
}