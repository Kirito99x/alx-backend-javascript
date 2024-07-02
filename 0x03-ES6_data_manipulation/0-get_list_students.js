/**
 * Retrieves a list of students.
 * @returns {Array} An array of student objects, each containing the properties:
 * - id: Number (student ID)
 * - firstName: String (student's first name)
 * - location: String (student's location)
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
