import { Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Course } from '../../store/models/Course.interface';

export interface CourseDetailsFormProps {
  course?: Course;
  submitHandler: SubmitHandler<Course>;
}

export const CourseDetailsForm: React.FC<CourseDetailsFormProps> = (props) => {
  const { course, submitHandler } = props;

  const { register, handleSubmit } = useForm<Course>({
    defaultValues: course,
  });

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='flex flex-col w-full lg:w-1/2 mx-auto gap-8'
    >
      <TextField {...register('name')} label='Name' variant='standard' />
      <TextField {...register('subject')} label='Subject' variant='standard' />
      <TextField {...register('level')} label='Level' variant='standard' />
      <TextField {...register('description')} label='Description' variant='standard' multiline />
      <TextField {...register('syllabus')} label='Syllabus' variant='standard' />
      <Button variant='contained' endIcon={<SaveIcon />} type='submit'>
        Save
      </Button>
    </form>
  );
};

CourseDetailsForm.defaultProps = {
  course: undefined,
};
