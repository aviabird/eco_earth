import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PostListItem from '../../components/post_list_item/PostListItem';
import * as postEffects from '../../../../store/posts/effects';
import PropTypes from 'prop-types';

class PostList extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.effects.fetchPosts()
      .then(() => this.setState({ loadingPosts: false }))
      .catch(error => {
        console.log(error);
      });
  }

  initialState() {
    this.setState({ loadingPosts: true });
  }

  renderPosts(postData) {
    return (<PostListItem data={postData} key={postData.id} />);
  }
  render() {
    if(this.state.loadingPosts) {
      return (
        <h5>Loading Latest Posts</h5>
      )
    }
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