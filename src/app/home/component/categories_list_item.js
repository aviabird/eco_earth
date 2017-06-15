import React from 'react';
import {Link} from 'react-router';


const CategoriesListItem = (props) => {
  return (
    <span>
      <Link to="/">
        { props.category }
      </Link>
    </span>
  );
};

export default CategoriesListItem;