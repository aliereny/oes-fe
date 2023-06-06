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

export function ViewCourse() {
  const x = 5;

  const course = {
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
  return (
    <div className="p-4 md:p-16">
      <div className="flex flex-col w-full lg:w-1/2 mx-auto gap-8">
        <div className='flex flex-col gap-4'>
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
        <div className="flex flex-col">
          <Typography variant='h5'>Contents</Typography>
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
