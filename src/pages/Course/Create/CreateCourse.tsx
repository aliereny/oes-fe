import React from 'react';
import { Typography } from '@mui/material';
import { Course } from '../../../store/models/Course.interface';
import { CourseDetailsForm } from '../../../forms/CourseDetailsForm/CourseDetailsForm';
import { useCourseStore } from '../../../store/CourseStore';

export function CreateCourse() {
  const { createCourse } = useCourseStore();
  const onSubmit = (data: Course) => {
    createCourse(data);
  };

  return (
    <div className='p-4 md:p-16'>
      <Typography variant='h4' align='center'>
        Create Course
      </Typography>
      <CourseDetailsForm submitHandler={onSubmit} />
    </div>
  );
}
