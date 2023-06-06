import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useCourseStore } from '../../../store/CourseStore';
import { CourseCard } from '../../../components/CourseCard/CourseCard';

export function ListCourses() {
  const { courses } = useCourseStore();
  return (
    <div className='bg-blue-50'>
      <Button variant='contained' endIcon={<AddIcon />} href='/courses/create'>
        Create
      </Button>
      <div className='w-auto grid grid-cols-1 md:grid-cols-2 mx-auto justify-center items-center'>
        {courses.map((item) => {
          console.log(item);
          return <CourseCard key={item.id} className='mx-auto' course={item} />;
        })}
      </div>
    </div>
  );
}
