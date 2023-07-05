'use strict';

void function () {

    const student = { name: "Иван Иванов" };
    const grades = { math: 90, fiz: 85, eng: 95 };
    const studentGrades = new WeakMap();

    function saveGrades(student, grades) {        
        studentGrades.set(student, grades);
    }

    saveGrades(student, grades);
    
}();
