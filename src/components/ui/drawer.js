import * as React from 'react';
import { Box, Stack, IconButton, Link } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRing, faCherries } from '@fortawesome/free-solid-svg-icons';
import CompanyName from '../navbar/company';
import Necklaces from '../../pages/necklaces';
import { pageState, setPageValue } from '../../store/ui/page-slice';

import {
  formModalState,
  setFormModalShow,
} from '../../store/ui/formModal-slice';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const dispatch = useDispatch();
  const { formModalShow } = useSelector(formModalState);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, ['left']: open });
  };

  const list = () => (
    <Box
      sx={{ width: 200, background: '#ffeef8', minHeight: '100vh' }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        <ListItem button onClick={() => dispatch(setPageValue('home'))}>
          <CompanyName />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button onClick={() => dispatch(setPageValue('accessories'))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/diamond.png"
              alt="Logo"
              height="27.5px"
            />
          </ListItemIcon>
          <ListItemText primary={'Accessories'} />
        </ListItem>

        <ListItem button onClick={() => dispatch(setPageValue('bracelets'))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/bracelet%20(2).png"
              alt="Logo"
              height="32px"
            />
          </ListItemIcon>
          <ListItemText primary={'Bracelets'} />
        </ListItem>

        <ListItem button onClick={() => dispatch(setPageValue('earrings'))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/earrings.png"
              alt="Logo"
              height="30px"
            />
          </ListItemIcon>
          <ListItemText primary={'Earrings'} />
        </ListItem>

        <ListItem
          button
          onClick={() => dispatch(setPageValue('necklaces'))}
          href="#root"
        >
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/necklace.png"
              alt="Logo"
              height="30px"
            />
          </ListItemIcon>
          <ListItemText primary={'Necklaces'} />
        </ListItem>
        <ListItem button onClick={() => dispatch(setPageValue('rings'))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/rings.png"
              alt="Logo"
              height="30px"
            />
          </ListItemIcon>
          <ListItemText primary={'Rings'} />
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem button onClick={() => dispatch(setPageValue('home'))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/new.png"
              alt="Logo"
              height="30px"
            />
          </ListItemIcon>
          <ListItemText primary={'New Arrivals'} />
        </ListItem>
        <ListItem button onClick={() => dispatch(setPageValue('home'))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/quality.png"
              alt="Logo"
              height="30px"
            />
          </ListItemIcon>
          <ListItemText primary={'Best Sellers'} />
        </ListItem>
        <ListItem button onClick={() => dispatch(setPageValue('home'))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/hot-sale.png"
              alt="Logo"
              height="30px"
            />
          </ListItemIcon>
          <ListItemText primary={'On Sale'} />
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem
          button
          onClick={() => {
            dispatch(setFormModalShow(true));
          }}
        >
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/paper-plane.png"
              alt="Logo"
              height="26px"
            />
          </ListItemIcon>
          <ListItemText primary={'Message Us'} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete" style={{ marginLeft: '0.6rem' }}>
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </Stack>
        </Button>
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
      {/* ) )} */}
    </div>
  );
}
