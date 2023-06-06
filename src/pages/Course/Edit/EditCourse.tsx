import React from 'react';
import { Typography } from '@mui/material';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Course } from '../../../store/models/Course.interface';
import { CourseDetailsForm } from '../../../forms/CourseDetailsForm/CourseDetailsForm';
import { useCourseStore } from '../../../store/CourseStore';

export function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    return <Navigate to='/courses' />;
  }

  const { readCourse, updateCourse } = useCourseStore();

  const course = readCourse(id);

  if (!course) {
    return <Navigate to='/courses' />;
  }

  const onSubmit = (data: Course) => {
    updateCourse(data.id, data);
    navigate(`/courses/${data.id}`);
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
