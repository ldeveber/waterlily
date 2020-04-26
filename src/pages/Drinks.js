import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCocktails, getIngredients } from '../selectors';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { fetchCocktails } from '../actions/cocktailsAction';
import { fetchIngredients } from '../actions/ingredientsAction';
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
  const drinks = useSelector(getCocktails);
  const ingredients = useSelector(getIngredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
    dispatch(fetchIngredients());
  }, [dispatch])
  
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <div className={classes.margin}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={ingredients}
        getOptionLabel={(ingredient) => ingredient.display_name}
        // defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            type="search"
            variant="outlined"
            label="Search by Ingredients"
            placeholder="Ingredients"
          />
        )}
      />
        {/* <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search" />
          </Grid>
        </Grid> */}
      </div>
      <Grid container spacing={4}>
        {drinks.map((drink) => (
          <Grid item key={drink.cocktail_slug} xs={12} sm={6} md={4}>
            <Drink drink={drink} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Drinks;
