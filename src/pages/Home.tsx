import React from 'react';
import { Typography } from '@mui/material';
import Logo from '../assets/logo.png';

import Background from '../assets/tedu-front.jpg';
import { LoginForm } from '../components/Forms/LoginForm/LoginForm';
import { Banner } from '../components/Banner/Banner';
import { Features } from '../components/Features/Features';

function Home() {
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
          <Typography variant='h3'>Log-in to improve your learning</Typography>
          <Typography variant='body1'>
            We believe that everyone should be able to reach courses and keep learning online as if
            they are in the school
          </Typography>
        </div>
        <LoginForm />
      </div>
      <Banner />
      <Features />
    </div>
  );
}

export default Home;
