// TODO FIXME
import drinks from './drinks.json';

export const FETCH_DRINKS_BEGIN = 'FETCH_INGREDIENTS_BEGIN';
export const FETCH_DRINKS_SUCCESS = 'FETCH_DRINKS_SUCCESS';
export const FETCH_DRINKS_FAILURE = 'FETCH_DRINKS_FAILURE';

export const fetchDrinksBegin = () => ({
  type: FETCH_DRINKS_BEGIN,
  payload: {
    loading: true,
  },
});

export const fetchDrinksSuccess = (drinks) => ({
  type: FETCH_DRINKS_SUCCESS,
  payload: {
    drinks,
    loading: false,
  },
});
  
export const fetchDrinksFailure = (error) => ({
  type: FETCH_DRINKS_FAILURE,
  payload: {
    pending: false,
    error,
  },
});

export const fetchDrinks = () => {
  return (dispatch, getState) => {
    dispatch(fetchDrinksBegin());

    // TODO FIXME
    // return fetch('/api/v1/drinks')
    //   .then((res) => res.json())
    //   .then(
    //     (data) => {
      // return Promise.resolve(() => {
          const map = {};
          drinks.forEach(drink => {
            map[drink.id] = drink;
          });
          return dispatch(fetchDrinksSuccess(map))
        // });
        // },
        // (error) => {
        //   console.error(error);
        //   return dispatch(fetchDrinksFailure(error));
        // });
  };
};
