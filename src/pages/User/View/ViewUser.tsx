import React from 'react';
import { Button, Chip, Typography } from '@mui/material';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useUserStore } from '../../../store/UserStore';

export function ViewUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    return <Navigate to='/users' />;
  }

  const { readUser, deleteUser } = useUserStore();

  const user = readUser(id);

  if (!user) {
    return <Navigate to='/users' />;
  }

  const handleDelete = () => {
    deleteUser(user.id);
    navigate('/users');
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
            <Button variant='outlined' startIcon={<EditIcon />} href={`/users/edit/${user.id}`}>
              Edit
            </Button>
          </div>
          <Typography variant='h4'>{user.name}</Typography>
          <Typography variant='h6'>{user.email}</Typography>
          <span>
            <Chip label={user.role} color='primary' className='w-auto' />
          </span>
        </div>
      </div>
    </div>
  );
}
