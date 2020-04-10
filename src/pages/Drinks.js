import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDrinks } from '../selectors';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import { fetchDrinks } from '../actions/drinksAction';
import Drink from '../components/Drink';

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

const Drinks = () => {
  const classes = useStyles();
  const drinks = useSelector(getDrinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDrinks());
  }, [dispatch])
  
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search" />
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={4}>
        {drinks.map((drink) => (
          <Grid item key={drink.display_name} xs={12} sm={6} md={4}>
            <Drink drink={drink} key={drink.display_name} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Drinks;
