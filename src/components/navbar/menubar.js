import React, { useEffect, useState } from 'react';
import { Grid, Tab, Stack, IconButton, Button } from '@mui/material/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import SwipeableTemporaryDrawer from '../ui/drawer';

const Menubar = () => {
  const [icons, setIcons] = useState(true && window.innerWidth > 1200);
  const dispatch = useDispatch();

  useEffect(() => {
    function updateWidth() {
      if (window.innerWidth >= 1200) {
        setIcons(true);
      } else {
        setIcons(false);
      }
    }
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <Grid item xs={1} lg={4} className="borderred" px={0.5}>
      <Grid container justifyContent="flex-start" className="color1">
        {icons ? (
          <div>
            <Tab label="Featured" />
            <Tab label="Gifts" />
            <Tab label="Sale" />
          </div>
        ) : (
          <SwipeableTemporaryDrawer />
        )}
      </Grid>
    </Grid>
  );
};

export default Menubar;
