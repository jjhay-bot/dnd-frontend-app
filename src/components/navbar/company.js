import React from 'react';
import { Grid, Tab } from '@mui/material/';

const CompanyName = () => {
  return (
    <Grid item xs={10} lg={4} className="borderred">
      <Grid container justifyContent="center" alignItems="center">
        <div className="dnd">DND</div>
        <div className="gold">Gold Jewelry</div>
      </Grid>
    </Grid>
  );
};

export default CompanyName;
