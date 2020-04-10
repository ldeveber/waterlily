import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Footer from './Footer';
import Dashboard from '../pages/Dashboard';
import Drinks from '../pages/Drinks';
import Ingredients from '../pages/Ingredients';
import Drink from '../pages/Drink';
import Ingredient from '../pages/Ingredient';
import NoMatch from '../pages/NoMatch';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main>
        <Switch>
          <Route key="drinks" exact path="/drinks">
            <Drinks />
          </Route>
          <Route key="ingredients" exact path="/ingredients">
            <Ingredients />
          </Route>
          <Route key="drinks" exact path="/drinks/:drinkId">
            <Drink />
          </Route>
          <Route key="ingredients" exact path="/ingredients/:ingredientId">
            <Ingredient />
          </Route>
          <Route key="dashboard" exact path="/">
            <Dashboard />
          </Route>
          <Route key="404" path="*">
            <NoMatch />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
