import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PostListItem from '../../components/post_list_item/PostListItem';
import * as postEffects from '../../../../store/posts/effects';
import PropTypes from 'prop-types';

class PostList extends Component {

  componentDidMount() {
    this.props.effects.fetchPosts()
      .then(() => console.log('Loaded Posts'))
      .catch(error => {
        alert(error);
      });
  }

  renderPosts(postData) {
    return (<PostListItem data={postData} key={postData.id} />);
  }
  render() {
    return (
      <ul>
        {this
          .props
          .posts
          .map(this.renderPosts)}
      </ul>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  effects: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return { posts: state.post_state.posts };
}

function mapDispatchToProps(dispatch) {
  return {
    effects: bindActionCreators(postEffects, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);