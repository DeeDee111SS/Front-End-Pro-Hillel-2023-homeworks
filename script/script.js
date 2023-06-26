"use strict";

void (function () {

    function Student(name, surname, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.attendance = Array(10);
        this.progress = Array(10);
    }

    Student.prototype.pres = function () {
        const emptyIndex = this.attendance.findIndex((value) => value === undefined);
        if (emptyIndex !== -1) this.attendance[emptyIndex] = true;
    };

    Student.prototype.attendanceMark = function (attMark) {
        const emptyIndex = this.attendance.findIndex((value) => value === undefined);
        if (emptyIndex !== -1) this.attendance[emptyIndex] = attMark;
    };

    Student.prototype.present = function () {
        this.attendanceMark(true);
    };

    Student.prototype.absent = function () {
        this.attendanceMark(false);
    };

    Student.prototype.mark = function (mark) {
        const emptyIndex = this.attendance.filter((value) => value !== undefined).length - 1;
        if (emptyIndex !== -1 && typeof mark === "number" && mark >= 0 && mark <= 10) this.progress[emptyIndex] = mark;
    };

    Student.prototype.averageProgress = function () {
        const validMarks = this.progress.filter((mark) => typeof mark === "number");
        if (validMarks.length === 0) return 0;
        const sum = validMarks.reduce((acc, mark) => acc + mark, 0);
        return sum / validMarks.length;
    };

    Student.prototype.averageAttendance = function () {
        const attendanceCount = this.attendance.filter((value) => value !== undefined).length;
        const presentCount = this.attendance.filter((value) => value === true).length;
        return presentCount / attendanceCount;        
    };

    Student.prototype.summary = function () {
        const averageMark = this.averageProgress();
        const averageAttendance = this.averageAttendance();
        if (averageMark >= 9 && averageAttendance >= 0.9) return "Ути какой молодчинка!";
        if (averageMark > 9 || averageAttendance > 0.9) return "Норм, но можно лучше";
        if (averageMark < 9 && averageAttendance < 0.9) return "Редиска!";
    };

    Student.prototype.age = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };

    const student1 = new Student("Ozzy", "Osbourne", 1948);
    const student2 = new Student("James", "Hetfield", 1963);
    const student3 = new Student("Nathan", "Explosion", 1970);

    console.log(student1.age());

    student1.present();
    student1.mark(9);

    student1.present();
    student1.mark(9);

    student1.present();

    student1.present();
    student1.mark(7);

    student1.absent();

    student1.present();
    student1.mark(8);

    console.log(student1.averageProgress());
    console.log(student1.summary());
    console.log(student1);
    
})();
