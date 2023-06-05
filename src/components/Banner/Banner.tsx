import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import React from 'react';
import { Typography } from '@mui/material';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

export function Banner() {
  return (
    <div className='justify-center items-center p-8 bg-white flex flex-col sm:flex-row flex-wrap gap-4 text-gray-900'>
      <div className='flex flex-row gap-4'>
        <div className='flex flex-row items-center gap-4 w-52'>
          <ClassOutlinedIcon fontSize='large' />
          <Typography variant='h5'>Diverse Course Selection</Typography>
        </div>
        <div className='flex flex-row items-center gap-4 w-52'>
          <TrendingUpOutlinedIcon fontSize='large' />
          <Typography variant='h5'>Interactive Learning Experience</Typography>
        </div>
      </div>
      <div className='flex flex-row gap-4'>
        <div className='flex flex-row items-center gap-4 w-52'>
          <VerifiedOutlinedIcon fontSize='large' />
          <Typography variant='h5'>Recognized Certification</Typography>
        </div>
        <div className='flex flex-row items-center gap-4 w-52'>
          <ForumOutlinedIcon fontSize='large' />
          <Typography variant='h5'>Timely Feedback and Assessment</Typography>
        </div>
      </div>
    </div>
  );
}
