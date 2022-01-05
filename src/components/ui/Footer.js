import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: { position: 'absolute' },
  link: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    textDecoration: 'none',
    '&:hover': { color: 'white' },
  },
  gridItem: {
    margin: '3rem',
  },
  icon: {
    height: '4rem',
    width: '4rem',
    [theme.breakpoints.down('xs')]: {
      width: '2.5rem',
      height: '2.5rem',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-5rem',
    right: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      right: '0.6rem',
      marginTop: '-3.5rem',
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent='center'
          direction='row'
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/'
                className={classes.link}
                onClick={() => props.setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/services'
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to='/customsoftware'
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to='/mobileapps'
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                Mobile Apps Development
              </Grid>
              <Grid
                item
                component={Link}
                to='/websites'
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/about'
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to='/about'
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to='/about'
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/contact'
                className={classes.link}
                onClick={() => props.setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid
        container
        justifyContent='flex-end'
        className={classes.socialContainer}
        spacing={2}
      >
        <Grid
          item
          component={'a'}
          href='https://www.facebook.com'
          rel='noopener noreferrer'
          target='_blank'
          className={classes.icon}
        >
          <img alt='facebook' src={facebook} />
        </Grid>
        <Grid
          item
          component={'a'}
          href='https://www.twitter.com'
          rel='noopener noreferrer'
          target='_blank'
          className={classes.icon}
        >
          <img alt='twitter' src={twitter} />
        </Grid>
        <Grid
          item
          component={'a'}
          href='https://www.instagram.com'
          rel='noopener noreferrer'
          target='_blank'
          className={classes.icon}
        >
          <img alt='instagram' src={instagram} />
        </Grid>
      </Grid>
    </footer>
  );
}
