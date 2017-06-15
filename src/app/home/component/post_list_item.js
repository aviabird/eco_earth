import React from 'react';

const PostsListItem = (props) => {
  return (
    <li className = "posts-list list-group-item">
      <div className = "row">
       <div className = "col-md-8">{props.title} </div>
      </div>
      {props.content}
    </li>
  );
};

export default PostsListItem;
