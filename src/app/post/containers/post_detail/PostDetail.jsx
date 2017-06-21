import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as postEffects from '../../../../store/posts/effects';
import PropTypes from 'prop-types';

import './PostDetail.css';

class PostDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    var postId = this.props.match.params.postId;
    this.props.effects.getSelectedPost(postId)
      .then(() => this.setState({ isLoading: true }))
      .catch((error) => console.log(error));
  }

  initialState() {
    this.setState({ isLoading: true });
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
  post: PropTypes.object.isRequired,
  effects: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { post: state.post_state.selected_post };
}
function mapDispatchToProps(dispatch) {
  return {
    effects: bindActionCreators(
      { ...postEffects },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);