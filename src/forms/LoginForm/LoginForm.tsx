import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

export function LoginForm() {
  return (
    <div className='bg-white flex flex-col p-12 gap-8 w-full md:w-96'>
      <Typography variant='h4'>Login</Typography>
      <div className='flex flex-col gap-4'>
        <TextField label='E-mail' type='email' variant='standard' />
        <TextField label='Password' type='password' variant='standard' />
      </div>
      <Button variant='contained'>Log in</Button>
    </div>
  );
}
