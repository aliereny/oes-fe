import React from 'react';
import {
  Avatar,
  Button,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useCourseStore } from '../../../store/CourseStore';

export function ViewCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    return <Navigate to='/courses' />;
  }

  const { readCourse, deleteCourse } = useCourseStore();

  const course = readCourse(id);

  if (!course) {
    return <Navigate to='/courses' />;
  }

  const handleDelete = () => {
    deleteCourse(course.id);
    navigate('/courses');
  };

  return (
    <div className='p-4 md:p-16'>
      <div className='flex flex-col w-full lg:w-1/2 mx-auto gap-8'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4'>
            <Button
              color='error'
              variant='contained'
              startIcon={<RemoveCircleOutlineIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button variant='outlined' startIcon={<EditIcon />} href={`/courses/edit/${course.id}`}>
              Edit
            </Button>
          </div>
          <Typography variant='h4'>{course.name}</Typography>
          <Typography variant='h6'>{course.subject}</Typography>
          <span>
            <Chip label={course.level} color='primary' className='w-auto' />
          </span>
          <p>{course.description}</p>
          <span>
            <Button variant='contained' startIcon={<DownloadOutlinedIcon />} href={course.syllabus}>
              Syllabus
            </Button>
          </span>
        </div>
        <div className='flex flex-col'>
          <Typography variant='h5'>Contents</Typography>
          <List>
            {course.contents.map((item) => (
              <ListItem key={item.label}>
                <ListItemButton>
                  <ListItemIcon>
                    <PlayCircleOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
        <div className='flex flex-col'>
          <Typography variant='h5'>Instructors</Typography>
          <List>
            {course.instructors.map((item) => (
              <ListItem key={item}>
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item} secondary='Instructor' />
              </ListItem>
            ))}
          </List>
        </div>
        <div className='flex flex-col'>
          <Typography variant='h5'>Students</Typography>
          <List>
            {course.students.map((item) => (
              <ListItem key={item}>
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item} secondary='Student' />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}
