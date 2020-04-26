// TODO FIXME
import cocktails from './cocktails.json';
// import { URL } from './host.js';

export const FETCH_COCKTAILS_BEGIN = 'FETCH_COCKTAILS_BEGIN';
export const FETCH_COCKTAILS_SUCCESS = 'FETCH_COCKTAILS_SUCCESS';
export const FETCH_COCKTAILS_FAILURE = 'FETCH_COCKTAILS_FAILURE';

export const fetchCocktailsBegin = () => ({
  type: FETCH_COCKTAILS_BEGIN,
  payload: {
    loading: true,
  },
});

export const fetchCocktailsSuccess = (cocktails) => ({
  type: FETCH_COCKTAILS_SUCCESS,
  payload: {
    cocktails,
    loading: false,
  },
});
  
export const fetchCocktailsFailure = (error) => ({
  type: FETCH_COCKTAILS_FAILURE,
  payload: {
    pending: false,
    error,
  },
});

export const fetchCocktails = () => {
  return (dispatch, getState) => {
    dispatch(fetchCocktailsBegin());

    // TODO FIXME
    const map = {};
    cocktails.forEach(cocktail => {
      map[`${cocktail.cocktail_slug}.${cocktail.spec_slug}`] = cocktail;
    });
    return dispatch(fetchCocktailsSuccess(map))

    // return fetch(`${ URL }/api/v1/cocktails`).then(res => {
    //   const data = res.json();
    //   drinks.forEach(drink => {
    //     map[drink.id] = drink;
    //   });
    //   return dispatch(fetchCocktailsSuccess(map))
    // }).catch((error) => {
    //   console.error(error);
    //   return dispatch(fetchCocktailsFailure(error));
    // });
  };
};
