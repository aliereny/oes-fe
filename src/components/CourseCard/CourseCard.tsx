import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Course } from '../../store/models/Course.interface';

export interface CourseCardProps {
  course: Course;
  className: string;
}

export const CourseCard: React.FC<CourseCardProps> = (props) => {
  const { course, ...rest } = props;
  return (
    <Card sx={{ width: 275 }} {...rest} variant='outlined'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {course.subject}
        </Typography>
        <Typography variant='h5' component='div'>
          {course.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {course.level}
        </Typography>
        <Typography variant='body2'>{course.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};
