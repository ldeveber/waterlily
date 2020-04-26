// TODO FIXME
import ingredients from './ingredients.json';
import tree from './ingredients_tree.json';

export const FETCH_INGREDIENTS_BEGIN = 'FETCH_INGREDIENTS_BEGIN';
export const FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS';
export const FETCH_INGREDIENTS_FAILURE = 'FETCH_INGREDIENTS_FAILURE';

export const fetchIngredientsBegin = () => ({
  type: FETCH_INGREDIENTS_BEGIN,
  payload: {
    loading: true,
  },
});

export const fetchIngredientsSuccess = (ingredients) => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload: {
    ingredients,
    tree,
    loading: false,
  },
});
  
export const fetchIngredientsFailure = (error) => ({
  type: FETCH_INGREDIENTS_FAILURE,
  payload: {
    pending: false,
    error,
  },
});
  
export const fetchIngredients = () => {
  return (dispatch, getState) => {
    dispatch(fetchIngredientsBegin());

    // FIXME
    const map = {};
    ingredients.forEach(ingredient => {
      map[ingredient.slug] = ingredient;
    });
    return dispatch(fetchIngredientsSuccess(map))

    // return fetch('/api/v1/ingredients')
    // .then((res) => res.json())
    //   .then(
    // (data) => dispatch(fetchIngredientsSuccess(data)),
    // (error) => {
    //   console.error(error);
    //   return dispatch(fetchIngredientsFailure(error));
    // });
  };
};
