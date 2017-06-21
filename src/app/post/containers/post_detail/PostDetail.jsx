import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { selectedPost } from '../../../../store/posts/actions';

import './PostDetail.css';

class PostDetail extends Component {

  componentWillMount() {
    var id = this.props.match.params.postId;
    this
      .props
      .onPostSelect(id);
  }

  render() {
    return (
      <div className = "post_detail">
        <h3>Details for:</h3><br/>
        <div>Title:{ this.props.post.title }</div>
        <div>Pages:{ this.props.post.content }</div>
        <Link to = "/">
          Back to home page
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {post: state.post_state.selected_post};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onPostSelect: selectedPost //binding this actioncreator to properties
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);