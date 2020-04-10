import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Ingredient = ({ ingredient }) => {
  return (
    <TableRow key={ingredient.name}>
      <TableCell component="th" scope="row">
        {ingredient.name}
      </TableCell>
      <TableCell>{ingredient.description.short}</TableCell>
    </TableRow>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.object.isRequired,
};

export default Ingredient;
