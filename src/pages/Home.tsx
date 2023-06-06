import React from 'react';
import { Button, Typography } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Background from '../assets/tedu-front.jpg';
import { LoginForm } from '../forms/LoginForm/LoginForm';
import { Banner } from '../components/Banner/Banner';
import { Features } from '../components/Features/Features';
import { useAuthStore } from '../store/AuthStore';

const Home = () => {
  const { loggedIn } = useAuthStore();
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className='w-screen aspect-video flex flex-col p-16 justify-center items-center'
      >
        <div className='text-white mb-4 md:mb-8 lg:mb-16'>
          <Typography variant='h4'>Ted University</Typography>
          <Typography variant='h3'>Improve your learning</Typography>
          <Typography variant='body1'>
            We believe that everyone should be able to reach courses and keep learning online as if
            they are in the school
          </Typography>
        </div>
        {loggedIn ? (
          <Button
            variant='contained'
            endIcon={<PlayCircleOutlineIcon />}
            size='large'
            href='/courses'
          >
            Start Learning
          </Button>
        ) : (
          <LoginForm />
        )}
      </div>
      <Banner />
      <Features />
    </div>
  );
};

export default Home;
