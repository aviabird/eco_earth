import React from "react";
import "./CategoryListItem.css";

const CategoryListItem = props => {
  return (
    <span className="category-list-item">
      {props.title}
      <br />
      <small>
        {props.description}
      </small>
    </span>
  );
};

export default CategoryListItem;
