import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  selectedPost,
  deletePost
} from "./../../../../../store/modules/posts/actions.jsx";
import "./PostDetail.css";
import { Link } from "react-router-dom";
import { Panel, Button } from "react-bootstrap";
import Loader from "../../../../../shared/components/loader/Loader";

class AdminPostDetail extends Component {
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

    //this.context.router.push('/')
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
      </Panel>
    );
  }
}

AdminPostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

function mapStateToProps({ postsState }) {
  return {
    post: postsState.selected_post,
    isFetchingSinglePost: postsState.isFetchingSinglePost
  };
}

export default connect(mapStateToProps, { selectedPost, deletePost })(
  AdminPostDetail
);
