import React from 'react';
import { Typography } from '@mui/material';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { User } from '../../../store/models/User.interface';
import { UserDetailsForm } from '../../../forms/UserDetailsForm/UserDetailsForm';
import { useUserStore } from '../../../store/UserStore';

export function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    return <Navigate to='/users' />;
  }

  const { readUser, updateUser } = useUserStore();

  const user = readUser(id);

  if (!user) {
    return <Navigate to='/users' />;
  }

  const onSubmit = (data: User) => {
    updateUser(data.id, data);
    navigate(`/users/${data.id}`);
  };

  return (
    <div className='p-4 md:p-16'>
      <Typography variant='h4' align='center'>
        Edit User
      </Typography>
      <UserDetailsForm user={user} submitHandler={onSubmit} />
    </div>
  );
}
