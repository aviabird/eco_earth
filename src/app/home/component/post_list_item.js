import React from 'react';

const PostsListItem = (props) => {
  return (
    <li className="posts-list list-group-item">
      <div className="row">
       <div className="col-md-8">{props.title} </div>
       <div className="col-md-4 text-right">Category:{props.category}</div>
      </div>
      {props.content}
    </li>
  );
};

export default PostsListItem;
