import React from 'react';
import { useSelector } from 'react-redux';
import { getIngredients } from '../selectors';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Ingredient from '../components/Ingredient';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Ingredients = () => {
  const classes = useStyles();
  const ingredients = useSelector(getIngredients);
  
  console.log('an ingredient', ingredients[ 0 ]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ingredient Name</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((ingredient) => (
            <Ingredient key={ingredient.name} ingredient={ingredient} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

Ingredients.propTypes = {};

export default Ingredients;
