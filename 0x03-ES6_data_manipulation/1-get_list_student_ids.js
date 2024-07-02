/**
 * @returns Array of student ids
 * 
 */
export function getStudentIds() {
    if (!Array.isArray(getListStudent)){
        return [];
    }
    return getListStudent.map((student) => student.id);
}
