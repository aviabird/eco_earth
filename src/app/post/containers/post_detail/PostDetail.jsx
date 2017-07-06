import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectedPost } from './../../../../store/modules/posts/actions';
import './PostDetail.css';
import { Link } from 'react-router-dom';
import { Panel ,Button } from 'react-bootstrap';
import Loader from '../../../../shared/components/loader/Loader';

class PostDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    var postId = this.props.match.params.postId;
    this.props.selectedPost(postId);
    this.setState({postId});
  }

  render() {
    if (this.props.isFetchingSinglePost) {
      return (
        <Loader />
      )
    }
    return (
      <Panel className="post_detail">
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.content}</p>
        <Link to ={"/post/edit/"+ this.state.postId}>
          <Button className="btn-primary pull-right edit_post">EDIT POST </Button>
        </Link>
      </Panel>  
    );
  }
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

function mapStateToProps({ postsState }) {
  return { post: postsState.selected_post, isFetchingSinglePost: postsState.isFetchingSinglePost };
}

export default connect(mapStateToProps, { selectedPost })(PostDetail);