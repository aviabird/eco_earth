import React from 'react';
import _ from 'lodash';
import './CategoryListItem.css';

const CategoryListItem = (props) => {
  return (
    <span className="category-list-item">
      <span className="badge pull-right">20</span>
      {props.title}
      <br/>
      <small>{props.description}</small>
    </span>
  );
};

export default CategoryListItem;