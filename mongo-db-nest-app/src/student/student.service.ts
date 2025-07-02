import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StuedntDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StuedntDocument>
  ){}

  async createStudent(data: Partial<Student>):
  Promise<Student>{
    const newStudent = new this.studentModel(data);
    return newStudent.save();
  }
}
