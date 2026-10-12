import { Controller, Get, Post, Patch, Put, Delete, Param } from '@nestjs/common';
import { CourseService } from './course.service.js';


@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}
    @Get()
    getAllCourses() {
        return this.courseService.getAllCourses();
    }
    @Get(':id')
    getCourseById(@Param('id') id : string) {
        return this.courseService.getCourseById();
    }
    

    @Post()
    createCourse() {
        return this.courseService.createCourse();
    }
    @Put(':id')
    updateCourse(@Param('id') id : string) {
        return this.courseService.updateCourse();
    }

    @Patch(':id') 
    patchCourse(@Param('id') id : string) {
        return this.courseService.patchCourse();
    }
    @Delete(':id') 
    deleteCourse(@Param('id') id: string) {
        return this.courseService.deleteCourse();
    }

}
