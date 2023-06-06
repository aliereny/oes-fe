import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
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

  const { register, handleSubmit } = useForm<User>({
    defaultValues: user,
  });

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='flex flex-col w-full lg:w-1/2 mx-auto gap-8'
    >
      <TextField {...register('name')} label='Name' variant='standard' />
      <TextField {...register('email')} label='Email' variant='standard' />
      <TextField {...register('password')} label='Password' variant='standard' />
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
