import React from 'react';
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useUserStore } from '../../../store/UserStore';

export function ListUsers() {
  const { getAdmins, getInstructors, getStudents } = useUserStore();

  return (
    <div className='bg-blue-50'>
      <Button variant='contained' endIcon={<AddIcon />} href='/users/create'>
        Create
      </Button>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <Typography variant='h5'>Admins</Typography>
          <List>
            {getAdmins().map((item) => (
              <a key={item.id} href={`/users/${item.id}`}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary={item.email} />
                </ListItem>
              </a>
            ))}
          </List>
        </div>
        <div className='flex flex-col'>
          <Typography variant='h5'>Instructors</Typography>
          <List>
            {getInstructors().map((item) => (
              <a key={item.id} href={`/users/${item.id}`}>
                <ListItem key={item.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary={item.email} />
                </ListItem>
              </a>
            ))}
          </List>
        </div>
        <div className='flex flex-col'>
          <Typography variant='h5'>Students</Typography>
          <List>
            {getStudents().map((item) => (
              <a key={item.id} href={`/users/${item.id}`}>
                <ListItem key={item.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary={item.email} />
                </ListItem>
              </a>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}
