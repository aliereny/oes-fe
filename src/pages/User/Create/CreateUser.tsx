import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../store/models/User.interface';
import { UserDetailsForm } from '../../../forms/UserDetailsForm/UserDetailsForm';
import { useUserStore } from '../../../store/UserStore';

export function CreateUser() {
  const navigate = useNavigate();
  const { createUser } = useUserStore();
  const onSubmit = (data: User) => {
    createUser(data);
    navigate('/users');
  };

  return (
    <div className='p-4 md:p-16'>
      <Typography variant='h4' align='center'>
        Create User
      </Typography>
      <UserDetailsForm submitHandler={onSubmit} />
    </div>
  );
}
