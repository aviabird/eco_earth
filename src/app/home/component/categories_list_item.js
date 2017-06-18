import React from 'react';
import { Link } from 'react-router';


const CategoriesListItem = (props) => {
  return (
    <span className="category-list-item">
        { props.category }
    </span>
  );
};

export default CategoriesListItem;