import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../../../store/posts/actions';
import PostsListItem from '../component/post_list_item';
//import { Link } from 'react-router';

class PostsList extends Component {

  constructor(props) {
    super(props);

    this.props.fetchPosts();
  }

  renderPosts(postData) {
    const title = postData.title;
    const content = postData.content;

    return (
      <PostsListItem key = {postData.id} title = {title} content = {content}/>
    );
  }
  render() {
    if(!this.props.posts){
      return (
      <ul>
        NO POSTS TO SHOW IN THIS CATEGORY
      </ul>
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
