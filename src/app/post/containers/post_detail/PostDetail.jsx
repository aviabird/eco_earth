import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectedPost } from './../../../../store/modules/posts/actions';
import './PostDetail.css';

class PostDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    
  }

  componentWillMount() {
    this.setState({ isLoading: true });
    var postId = this.props.match.params.postId;
    this.props.selectedPost(postId);

  }

  render() {
    if(this.isLoading) {
      return (
        <h5>Loading Post</h5>
      )
    }
    return (
      <div className="post_detail">
        <h3>Details for:</h3><br />
        <div>Title: {this.props.post.title}</div>
        <div>Pages: {this.props.post.content}</div>
        <Link to="/">
          Back to home page
        </Link>
      </div>
    );
  }
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

function mapStateToProps({postsState}) {
  return { post: postsState.selected_post };
}

export default connect(mapStateToProps,{selectedPost})(PostDetail);