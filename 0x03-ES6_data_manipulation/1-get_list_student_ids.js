#!/usr/bin/node
export function getStudentIds() {
    if (!Array.isArray(getListStudent)){
        return [];
    }
    return getListStudent.map((student) => student.id);
}