import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/AuthStore';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const { login } = useAuthStore();

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const submitHandler = (data: { email: string; password: string }) => {
    const validation = login(data.email, data.password);
    if (!validation) {
      setError(true);
    }
    // navigate('/courses');
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='bg-white flex flex-col p-12 gap-8 w-full md:w-96'
    >
      <Typography variant='h4'>Login</Typography>
      {error && <Alert severity='error'>Invalid credentials!</Alert>}
      <div className='flex flex-col gap-4'>
        {errors.email && <Alert severity='error'>Email is required!</Alert>}
        <TextField
          {...register('email', { required: true })}
          label='E-mail'
          type='text'
          variant='standard'
        />
        {errors.password && <Alert severity='error'>Password is required!</Alert>}
        <TextField
          {...register('password', { required: true })}
          label='Password'
          type='password'
          variant='standard'
        />
      </div>
      <Button variant='contained' type='submit'>
        Log in
      </Button>
    </form>
  );
}
