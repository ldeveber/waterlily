import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { fetchCocktails } from '../actions/cocktailsAction';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Drink = () => {
  const classes = useStyles();
  const history = useHistory();
  const match = useRouteMatch('/drinks/:id');
  const dispatch = useDispatch();

  const handleDrinksClick = () => {
    history.push('/drinks');
  }

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  const drink = useSelector(state => state.cocktails.cocktails[match.params.id] || {});

  console.log(match, drink);
  
  return (
    <Container maxWidth="md">
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/drinks" onClick={handleDrinksClick}>
          Drinks
        </Link>
        <Typography color="textPrimary">{drink.display_name}</Typography>
      </Breadcrumbs>


    </Container>
  );
};

export default Drink;
