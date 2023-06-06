import { Alert, Button, TextField, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useVerificationStore } from '../../store/VerificationStore';
import { useUserStore } from '../../store/UserStore';
import { generateSixDigitNumber } from '../../utils/PasswordUtil';

export const VerifyPhone = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ code: string }>();
  const navigate = useNavigate();

  const { createUser } = useUserStore();
  const { phone, code, sendMessage, user } = useVerificationStore();

  const [warn, setWarn] = useState(false);
  const submitHandler = (data: { code: string }) => {
    if (code !== data.code) {
      setWarn(true);
      return;
    }

    if (user) {
      user.password = generateSixDigitNumber();
      axios.post('http://127.0.0.1:3000/sendPassword', {
        name: user?.name,
        code: user.password,
        phoneNumber: phone,
      });
      createUser(user);
      navigate('/users');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='flex flex-col w-full lg:w-1/2 mx-auto gap-8'
    >
      <Typography variant='h4'>Verify your phone</Typography>
      <Typography variant='h4'>Enter verification code sent to {phone}</Typography>
      {errors.code && <Alert severity='error'>Code is required!</Alert>}
      {warn && <Alert severity='error'>Code is wrong!</Alert>}
      <TextField {...register('code', { required: true })} label='Code' variant='standard' />
      <Button variant='contained' endIcon={<SaveIcon />} type='submit'>
        Save
      </Button>
    </form>
  );
};
