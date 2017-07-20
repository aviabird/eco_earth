import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../../assets/images/avatar.jpg';
import './PostListItem.css';
import FontAwesome from 'react-fontawesome';
import { Panel, Col, Image, Badge } from 'react-bootstrap';

const PostListItem = (props) => {
  return (
    <Panel className="post">
      <Col xs={2} sm={1} md={1} className="user-info text-center">
        <Badge className="active"></Badge>
        <Image src={Avatar} alt="Avatar" rounded />
        <hr />
      </Col>
      <Col xs={8} sm={8} md={9} className="post-text">
        <Link to={"posts/" + props.data.id}>
          <h2>
            {props.data.title}
          </h2>
        </Link>
        <p>{props.data.content}</p>
      </Col>
      <Col xs={2} sm={2} md={2} className="post-info text-center">
        <div className="comments">
          <div className="commentbg">
            560
            <div className="mark"></div>
          </div>
        </div>
        <div className="views">
          <FontAwesome
            className='view-icon'
            name='eye'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          /> 1,568
        </div>
        <div className="time">
          <FontAwesome
            className='time-icon'
            name='clock-o'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          /> 2days
        </div>
      </Col>
    </Panel>
  );
};

export default PostListItem;