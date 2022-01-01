import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: { ...theme.mixins.toolbar, marginBottom: '2.2rem' },
  logo: { height: '6rem' },
  tabContainer: { marginLeft: 'auto' },
  tab: {
    ...theme.typography.tab,
    marginLeft: '25px',
    minWidth: 10,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
  },
}));
function Header(props) {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar disableGutters>
            <img alt='company logo' className={classes.logo} src={logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor='primary'
            >
              <Tab className={classes.tab} value={0}>
                Home
              </Tab>
              <Tab className={classes.tab} label='Services' />
              <Tab className={classes.tab} label='The Revolution' />
              <Tab className={classes.tab} label='About Us' />
              <Tab className={classes.tab} label='Contact Us' />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
export default Header;
