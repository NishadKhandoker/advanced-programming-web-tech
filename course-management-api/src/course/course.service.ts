import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses() {
        return "Getting All Courses";
    } 
    getCourseById() {
        return "Return Course by ID."
    }
    createCourse() {
        return "Course Created.";
    }
    updateCourse() {
        return "Course Updated.";
    }
    patchCourse() {
        return "Partially Updated.";
    }
    deleteCourse() {
        return "Course Deleted."
    }
}
