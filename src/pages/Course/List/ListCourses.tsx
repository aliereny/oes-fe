import { Grid } from '@mui/material';
import React from 'react';
import { useCourseStore } from '../../../store/CourseStore';
import { CourseCard } from '../../../components/CourseCard/CourseCard';

export function ListCourses() {
  const { courses } = useCourseStore();
  return (
    <div className='bg-blue-50'>
      <div className='w-auto grid grid-cols-1 md:grid-cols-2 mx-auto justify-center items-center'>
        {courses.map((item) => {
          console.log(item);
          return <CourseCard key={item.id} className='mx-auto' course={item} />;
        })}
      </div>
    </div>
  );
}
