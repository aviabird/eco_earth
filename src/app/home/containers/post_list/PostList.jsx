import { connect } from 'react-redux';
import React, { Component } from 'react';
import PostListItem from '../../components/post_list_item/PostListItem';
import PropTypes from 'prop-types';
<<<<<<< 9cf2e2587b856ea8dbd52c36134ad6937c764c52
import { fetchPosts } from '../../../../store/modules/posts/actions'
=======
import './PostList.css';
>>>>>>> test case for post_list added

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

    // console.log(this.props);

    if (!posts) {
      return (
        <h5>Loading Latest Posts</h5>
      )
    } else if (!posts.length) {
      return (
        <h5>Loading Latest Posts</h5>
      )
    }

    return (
      <ul>
        {posts.map(this.renderPosts)}
      </ul>
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