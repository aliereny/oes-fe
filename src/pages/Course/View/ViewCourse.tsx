import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Chip,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useCourseStore } from '../../../store/CourseStore';
import { Role } from '../../../store/models/Role.enum';
import { useUserStore } from '../../../store/UserStore';
import { useAuthUser } from '../../../utils/useAuthUser';

export function ViewCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [instructor, setInstructor] = useState<string>();
  if (!id) {
    return <Navigate to='/courses' />;
  }

  const { readCourse, deleteCourse, addCourseInstructor, addCourseStudent } = useCourseStore();
  const authUser = useAuthUser();
  const { users, addInstructorCourse, addStudentCourse } = useUserStore();
  const course = readCourse(id);

  if (!course) {
    return <Navigate to='/courses' />;
  }

  const handleDelete = () => {
    deleteCourse(course.id);
    navigate('/courses');
  };

  const handleEnroll = () => {
    if (authUser) {
      addCourseStudent(course.id, authUser.id);
      addStudentCourse(course.id, authUser.id);
    }
  };

  const addInstructor = () => {
    if (instructor) {
      addCourseInstructor(course.id, instructor);
      addInstructorCourse(course.id, instructor);
    }
  };

  return (
    <div className='p-4 md:p-16'>
      <div className='flex flex-col w-full lg:w-1/2 mx-auto gap-8'>
        <div className='flex flex-col gap-4'>
          {authUser?.role === Role.STUDENT &&
            (authUser.enrolledCourses.includes(course.id) ? (
              <div className='flex flex-row gap-4'>
                <Button variant='outlined' startIcon={<AddIcon />} disabled>
                  Enrolled
                </Button>
              </div>
            ) : (
              <div className='flex flex-row gap-4'>
                <Button variant='outlined' startIcon={<AddIcon />} onClick={handleEnroll}>
                  Enroll
                </Button>
              </div>
            ))}
          {authUser?.role === Role.ADMIN && (
            <div className='flex flex-row gap-4'>
              <Button
                color='error'
                variant='contained'
                startIcon={<RemoveCircleOutlineIcon />}
                onClick={handleDelete}
              >
                Delete
              </Button>
              <Button
                variant='outlined'
                startIcon={<EditIcon />}
                href={`/courses/edit/${course.id}`}
              >
                Edit
              </Button>
            </div>
          )}
          {authUser?.role === Role.ADMIN && (
            <div className='flex flex-col gap-4'>
              <Typography variant='h6'>Add instructor</Typography>{' '}
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>User</InputLabel>
                <Select
                  label='User'
                  value={instructor}
                  onChange={(val) => setInstructor(val.target.value)}
                >
                  {users
                    .filter(
                      (item) =>
                        item.role === Role.INSTRUCTOR && !course.instructors.includes(item.id)
                    )
                    .map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <Button variant='outlined' startIcon={<AddIcon />} onClick={addInstructor}>
                Add
              </Button>
            </div>
          )}
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
            {users
              .filter((item) => course.instructors.includes(item.id))
              .map((item) => (
                <ListItem key={item.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary='Instructor' />
                </ListItem>
              ))}
          </List>
        </div>
        <div className='flex flex-col'>
          <Typography variant='h5'>Students</Typography>
          <List>
            {users
              .filter((item) => course.students.includes(item.id))
              .map((item) => (
                <ListItem key={item.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary='Student' />
                </ListItem>
              ))}
          </List>
        </div>
      </div>
    </div>
  );
}
