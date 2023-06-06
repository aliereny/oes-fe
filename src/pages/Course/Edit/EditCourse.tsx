import React from 'react';
import { Typography } from '@mui/material';
import { Course } from '../../../store/models/Course.interface';
import { CourseDetailsForm } from '../../../forms/CourseDetailsForm/CourseDetailsForm';

export function EditCourse() {
  const course = {
    id: 's',
    name: 'SENG 214',
    subject: 'Software Engineering',
    level: 'Intermediate',
    description:
      'Software Engineering: introduction, basic terminology, principles and ethics.' +
      'Software Processes: process models, activities. Agile Development: agile' +
      'methodology, scrum. Software Requirements: eliciting requirements,' +
      'developing use cases, modeling with scenario-based methods, modeling with' +
      'class-based methods, UML models and sequence diagrams. Design Concepts:' +
      'patterns, software architecture',
    syllabus:
      'https://seng.tedu.edu.tr/sites/default/files/2022-09/seng-214-cmpe-313-software-engineering_fall_2022_syllabus_0.pdf',
    contents: [
      {
        label: 'Lecture 1',
        video: '/video',
      },
      {
        label: 'Lecture 2',
        video: '/video',
      },
      {
        label: 'Lecture 3',
        video: '/video',
      },
    ],
    instructors: ['Elif Kurtaran Özbudak', 'Merve Isil Peten'],
    students: ['Merve Arı', 'Ece Alpay', 'Doğa Ata'],
  };

  const onSubmit = (data: Course) => {
    console.log(data);
  };

  return (
    <div className='p-4 md:p-16'>
      <Typography variant='h4' align='center'>
        Edit Course
      </Typography>
      <CourseDetailsForm course={course} submitHandler={onSubmit} />
    </div>
  );
}
