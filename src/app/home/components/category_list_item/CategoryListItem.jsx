import React from 'react';

const CategoryListItem = (props) => {
  return (
    <span className="category-list-item">
      {props.title}
      <br/>
      <small>{props.desc}</small>
    </span>
  );
};

export default CategoryListItem;