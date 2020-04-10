import React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import LocalBar from '@material-ui/icons/LocalBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  let history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <LocalBar className={classes.icon} onClick={goHome} />
        <Typography variant="h6" color="inherit" noWrap onClick={goHome}>
          Driiiiinks
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
