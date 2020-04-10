import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const NoMatch = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          What you were looking for is not here.
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          You should go give your cat a hug.
        </Typography>
      </Container>
    </div>
  );
};

export default NoMatch;
