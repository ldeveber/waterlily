import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../selectors';
import { fetchIngredients } from '../actions/ingredientsAction';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Ingredient from '../components/Ingredient';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Ingredients = () => {
  const classes = useStyles();
  const ingredients = useSelector(getIngredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch])

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={ingredients}
        getOptionLabel={(option) => option.title}
        // defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Ingredients
          </ListSubheader>
        }
      >
        {ingredients.map((ingredient) => (
          <Ingredient key={ingredient.name} ingredient={ingredient} />
        ))}
      </List>
    </div>
  );
};

Ingredients.propTypes = {};

export default Ingredients;
