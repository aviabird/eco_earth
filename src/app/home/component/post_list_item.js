import React from 'react';

const PostsListItem = (props) => {
  return (
    <li className="list-group-item">
      <dl>
        <dd>
          {props.title}
        </dd>
        <dt>
          {props.category}
          {props.content}
        </dt>
      </dl>
    </li>
  );
};

export default PostsListItem;
