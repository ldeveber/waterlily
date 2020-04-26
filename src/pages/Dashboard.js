import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCocktails, getIngredients } from '../selectors';
import { fetchCocktails } from '../actions/cocktailsAction';
import { fetchIngredients } from '../actions/ingredientsAction';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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

const Dashboard = () => {
  const classes = useStyles();
  let history = useHistory();
  const drinks = useSelector(getCocktails);
  const ingredients = useSelector(getIngredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
    dispatch(fetchIngredients());
  }, [dispatch])

  const goDrinks = () => {
    history.push('/drinks');
  };
  const goIngredients = () => {
    history.push('/ingredients');
  };
  
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="lg">
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">

            <TextField id="filled-search" label="Search" type="search" variant="outlined" fullWidth style={{ margin: 20 }} />
            
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Or like, browse for whatever you fancy.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={goDrinks}>
                    Drinks
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={goIngredients}>
                    Ingredients
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* End hero unit */}
      </Container>
    </div>
  );
};

export default Dashboard;
