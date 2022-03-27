import React, { useEffect, useState } from 'react';
import { Grid, Tab, IconButton, Stack } from '@mui/material/';
import { useSelector, useDispatch } from 'react-redux';
import {
  faHome,
  faBars,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  formModalState,
  setFormModalShow,
} from '../../store/ui/formModal-slice';

const Contact = () => {
  const [icons, setIcons] = useState(true && window.innerWidth > 1200);
  const { formModalShow } = useSelector(formModalState);
  const dispatch = useDispatch();

  useEffect(() => {
    function updateWidth() {
      if (window.innerWidth > 1200) {
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
      <Grid container justifyContent="flex-end" className="color1">
        {icons ? (
          <div>
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact us" />
          </div>
        ) : (
          <Stack direction="row" spacing={0}>
            <IconButton
              aria-label="delete"
              style={{ marginRight: '0.65rem' }}
              onClick={() => dispatch(setFormModalShow(true))}
            >
              <FontAwesomeIcon icon={faBagShopping} />
            </IconButton>
          </Stack>
        )}
      </Grid>
    </Grid>
  );
};

export default Contact;
