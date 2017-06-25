import { connect } from 'react-redux';
import React, { Component } from 'react';
import PostListItem from '../../components/post_list_item/PostListItem';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../../../store/modules/posts/actions'
import './PostList.css';
import { Col } from 'react-bootstrap';
import Loader from '../../../../shared/components/loader/Loader';

class PostList extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts(postData) {
    return (<PostListItem data={postData} key={postData.id} />);
  }

  render() {
    const { posts } = this.props;

    if (!posts) {
      return (
        <Loader />
      )
    } else if (!posts.length) {
      return (
        <h5>No Posts Found</h5>
      )
    }

    return (
      <div className="post-list" >
        {posts.map(this.renderPosts)}
      </div>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.array
};

function mapStateToProps({postsState}, ownProps) {
  const { posts } = postsState;
  return { posts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);