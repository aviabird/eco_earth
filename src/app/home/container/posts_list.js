import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../../../store/posts/actions';
import PostsListItem from '../component/post_list_item';
//import { Link } from 'react-router';

class PostsList extends Component {

  componentWillMount() {
    var id = this.props.params.id;
    this
      .props
      .fetchPosts();
  }

  renderPosts(postData) {
    return (<PostsListItem data = { postData } key = { postData.id }/>);
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

//function mapStateToProps(state) {
function mapStateToProps(state) {
  return {posts: state.post_state.posts}; //{weather}==={weather:weather}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPosts //binding this actioncreator to properties
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
