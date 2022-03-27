import React from 'react';
import { Grid } from '@mui/material/';
import Contact from './contact';
import CompanyName from './company';
import Menubar from './menubar';

const Navbar = () => {
  return (
    <Grid
      container
      justifyContent="center"
      className="bg1"
      alignItems="center"
      margin="0.5em 0"
      padding="0.5em 0"
      position='fixed'
      top='1rem'
      zIndex='1'
    >
      <Grid item xs={12}>
        <Grid
          container
          margin="auto"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Menubar />
          <CompanyName />
          <Contact />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
