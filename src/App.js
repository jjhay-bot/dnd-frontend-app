import React, { useEffect } from 'react';
import './style.css';
import Navbar from './components/navbar';
import { Typography } from '@mui/material';
import Form from './components/form';
import Page from './pages';
import axios from 'axios';

export default function App() {

  return (
    <div>
      <Form />
      <Typography
        sx={{ fontSize: 13 }}
        color="text.secondary"
        gutterBottom
        style={{
          textAlign: 'center',
          width: '100%',
          paddingTop: '0.75rem',
          background: '#ffeef8',
          position: 'fixed',
          zIndex: '1',
          top: '0',
          height: '1rem',
        }}
      ></Typography>
      <Navbar />
      <div style={{ height: '6.75em', color: '' }}>{`-margin-`}</div>
      <Page />
    </div>
  );
}
