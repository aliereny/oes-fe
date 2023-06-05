import { List, ListItem, Typography } from '@mui/material';
import React from 'react';
import FeaturesImage from '../../assets/features.png';

export function Features() {
  return (
    <div className='bg-blue-50 flex flex-col md:flex-row justify-center items-center p-16 gap-8'>
      <img src={FeaturesImage} alt='Features' />
      <div>
        <Typography variant='h6'>Features</Typography>
        <Typography variant='h4'>What we provide</Typography>
        <List
          sx={{
            listStyleType: 'disc',
            listStylePosition: 'inside',
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>Diverse Course Selection</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Interactive Learning Experience</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Flexible Access and Convenience</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Personalized Recommendations</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Timely Feedback and Assessment</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Recognized Certification</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Efficient Administration Tools</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Continuous Improvement and Innovation</ListItem>
        </List>
      </div>
    </div>
  );
}
