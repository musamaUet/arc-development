import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme, useMediaQuery, IconButton } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useLocation } from 'react-router-dom';

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
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '2.2rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.4rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.2rem',
    },
  },
  logo: {
    height: '6rem',
    [theme.breakpoints.down('md')]: {
      height: '5rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '4rem',
    },
  },
  tabContainer: { marginLeft: 'auto' },
  logoContainer: {
    padding: '0px',
    '&:hover': { backgroundColor: 'transparent' },
  },
  tab: {
    ...theme.typography.tab,
    marginLeft: '25px',
    minWidth: 10,
    '&:hover': { color: '#fff' },
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: '0.7',
    '&:hover': {
      opacity: '1',
      color: 'white',
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    width: '50px',
    height: '50px',
  },
}));
function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const mediumDownBP = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        if (value !== 0) setValue(0);
        break;
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case '/customsoftware':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case '/mobileapps':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case '/websites':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(4);
        }
        break;
      case '/revolution':
        if (value !== 2) setValue(2);
        break;
      case '/about':
        if (value !== 3) setValue(3);
        break;
      case '/contact':
        if (value !== 4) setValue(4);
        break;
      case '/estimate':
        if (value !== 5) setValue(5);
        break;
      default:
        break;
    }
  }, [value]);

  const handleChange = (e, value) => {
    setValue(value);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };
  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/customsoftware' },
    { name: 'Mobile App Development', link: '/mobileapps' },
    { name: 'Website Development', link: '/websites' },
  ];
  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='primary'
      >
        <Tab className={classes.tab} component={Link} to='/' label='Home' />
        <Tab
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(event) => handleClick(event)}
          to='/services'
          label='Services'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/revolution'
          label='The Revolution'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/about'
          label='About Us'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/contact'
          label='Contact Us'
        />
      </Tabs>
      <Button variant='contained' color='secondary' className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            selected={selectedIndex === index && value === 1}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              setValue(1);
              handleClose();
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(true)}
      >
        This is example drawer
      </SwipeableDrawer>
      <IconButton
        disableRipple
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              disableRipple
              component={Link}
              to='/'
              onClick={() => setValue(0)}
            >
              <img alt='company logo' className={classes.logo} src={logo} />
            </Button>
            {mediumDownBP ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
export default Header;
