
import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './createcourse.dto.js';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
