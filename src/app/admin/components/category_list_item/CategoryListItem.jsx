import React from 'react';
import './CategoryListItem.css';
import { Panel, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import CategoryNew from '../../containers/category_new/CategoryNew';	

const CategoryListItem = (props) => {
  return (

    <span className="category-list-item">
      <span className="pull-right">
      	 
      </span>
      {props.title}
      <br/>
      <small>{props.desc}</small>
    </span>
  );
};

export default CategoryListItem;

