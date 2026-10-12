
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/createcourse.dto.js';
import { UpdateCourseDto } from './dto/updatecourse.dto.js';

@Injectable()
export class CourseService {
  private courses: any[] = [];
  private nextId = 1;

  getAllCourses() {
    return {
      message: 'All courses retrieved successfully.',
      data: this.courses,
    };
  }

  getCourseById(id: number) {
    const course = this.courses.find((course) => course.id === id);

    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found.`);
    }

    return {
      message: 'Course retrieved successfully.',
      data: course,
    };
  }

  createCourse(createCourseDto: CreateCourseDto) {
    const course = {
      id: this.nextId++,
      ...createCourseDto,
    };

    this.courses.push(course);

    return {
      message: 'Course created successfully.',
      data: course,
    };
  }

  updateCourse(id: number, updateCourseDto: UpdateCourseDto) {
    const index = this.courses.findIndex((course) => course.id === id);

    if (index === -1) {
      throw new NotFoundException(`Course with ID ${id} not found.`);
    }

    const updatedCourse = {
      ...this.courses[index],
      ...updateCourseDto,
      id,
    };

    this.courses[index] = updatedCourse;

    return {
      message: 'Course updated successfully.',
      data: updatedCourse,
    };
  }

  patchCourse(id: number, updateCourseDto: UpdateCourseDto) {
    const index = this.courses.findIndex((course) => course.id === id);

    if (index === -1) {
      throw new NotFoundException(`Course with ID ${id} not found.`);
    }

    const updatedCourse = {
      ...this.courses[index],
      ...updateCourseDto,
      id,
    };

    this.courses[index] = updatedCourse;

    return {
      message: 'Course partially updated successfully.',
      data: updatedCourse,
    };
  }

  deleteCourse(id: number) {
    const index = this.courses.findIndex((course) => course.id === id);

    if (index === -1) {
      throw new NotFoundException(`Course with ID ${id} not found.`);
    }

    const deletedCourse = this.courses[index];

    this.courses.splice(index, 1);

    return {
      message: 'Course deleted successfully.',
      data: deletedCourse,
    };
  }
}
