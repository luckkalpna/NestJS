import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'John Deo', age: 23 },
    { id: 2, name: 'peter', age: 20 },
  ];

  // GET Method --> All students data
  getAllStudents() {
    return this.students;
  }

  // GET Method --> All students data by ID
  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student)
      throw new NotFoundException(`Student with ID ${id} not found!`);
    return student;
  }

  // POST Method --> Create a new student
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return this.students;
  }

  // PUT Method --> Update whole student data
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1)
      throw new NotFoundException(`Student with ID ${id} not found!`);
    this.students[index] = { id, ...data };
    return this.students[index];
  };

  // PATCH Method --> Update partially data from student's data
  patchStudents(id: number, data: Partial<{ name: string; age: number }>){
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  };

  // DELETE Method --> For delete any student from DB
  deleteStudent(id: number){
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1)
      throw new NotFoundException(`Student with ID ${id} not found!`);
    const deleted = this.students.splice(index, 1)
    return { message: "Student Deleted", student: deleted[0]}
  }
}
