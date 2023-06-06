import { Alert, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from '../../store/models/User.interface';
import { Role } from '../../store/models/Role.enum';

export interface UserDetailsFormProps {
  user?: User;
  submitHandler: SubmitHandler<User>;
}

export const UserDetailsForm: React.FC<UserDetailsFormProps> = (props) => {
  const { user, submitHandler } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: user,
  });

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='flex flex-col w-full lg:w-1/2 mx-auto gap-8'
    >
      {errors.password && <Alert severity='error'>Name is required!</Alert>}
      <TextField {...register('name', { required: true })} label='Name' variant='standard' />
      {errors.email && <Alert severity='error'>E-mail is required!</Alert>}
      <TextField {...register('email', { required: true })} label='Email' variant='standard' />
      {errors.phone && <Alert severity='error'>Phone is required!</Alert>}
      <TextField {...register('phone', { required: true })} label='Phone' variant='standard' />
      {errors.role && <Alert severity='error'>Role is required!</Alert>}
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Role</InputLabel>
        <Select label='Role' {...register('role')}>
          <MenuItem value={Role.ADMIN}>Admin</MenuItem>
          <MenuItem value={Role.INSTRUCTOR}>Instructor</MenuItem>
          <MenuItem value={Role.STUDENT}>Student</MenuItem>
        </Select>
      </FormControl>
      <Button variant='contained' endIcon={<SaveIcon />} type='submit'>
        Save
      </Button>
    </form>
  );
};

UserDetailsForm.defaultProps = {
  user: undefined,
};
