import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonArrow from './ui/ButonArrow';
import animationData from '../animations/landinganimation/data';

const useStyles = makeStyles((theme) => ({
  animation: {
    minWidth: '21em',
    maxWidth: '50em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    width: 145,
    height: 45,
    borderRadius: 50,
    marginLeft: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    height: 45,
    width: 145,
    marginLeft: 40,
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: { margintTop: '3em' },
    [theme.breakpoints.down('xs')]: { margintTop: '2em' },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <React.Fragment>
      <Grid container direction='column' className={classes.mainContainer}>
        <Grid item>
          <Grid
            container
            justifyContent='flex-end'
            alignItems='center'
            direction='row'
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant='h2' align='center'>
                Bringing West Coast Technology
                <br />
                to the Midset
              </Typography>
              <Grid
                container
                justifyContent='center'
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    variant='contained'
                    className={classes.estimateButton}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginLeft: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill='red' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} width={'100%'} height={'100%'} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
