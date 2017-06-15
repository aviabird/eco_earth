import React from 'react';
import { Link } from 'react-router';

const PostsListItem = (props) => {
  return (
    <li className = "posts-list list-group-item">
      <div className = "row">
        <Link to = { "posts/" + props.data.id }>
          <div className = "col-md-8">{ props.data.title }
          </div>
        </Link>
      </div>
      { props.data.content }
    </li>
  );
};

export default PostsListItem;
