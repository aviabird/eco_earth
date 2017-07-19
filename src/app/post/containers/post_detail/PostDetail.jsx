import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  selectedPost,
  deletePost
} from "./../../../../store/modules/posts/actions";
import "./PostDetail.css";
import { Link } from "react-router-dom";
import { Panel, Button } from "react-bootstrap";
import Loader from "../../../../shared/components/loader/Loader";

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // static contextTypes = {
  //   router: PropTypes.object
  // };

  componentWillMount() {
    var postId = this.props.match.params.postId;
    this.props.selectedPost(postId);
    this.setState({ postId });
  }

  onDeleteClick() {
    this.props.deletePost(this.props.match.params.postId);

  }

  render() {
    if (this.props.isFetchingSinglePost) {
      return <Loader />;
    }
    return (
      <Panel className="post_detail">
        <h4>
          {this.props.post.title}
        </h4>
        <p>
          {this.props.post.content}
        </p>
        <Link to="/">
          <Button
            onClick={this.onDeleteClick.bind(this)}
            className="btn-danger pull-right"
          >
            Delete Post
          </Button>
        </Link>
        <Link to={"/post/edit/" + this.state.postId}>
          <Button className="btn-primary  edit_post">Edit Post</Button>
        </Link>
      </Panel>
    );
  }
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

function mapStateToProps({ postsState }) {
  return {
    post: postsState.selected_post,
    isFetchingSinglePost: postsState.isFetchingSinglePost
  };
}

export default connect(mapStateToProps, { selectedPost, deletePost })(
  PostDetail
);
