import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from "react-avatar";
import {
  approvePost,
  rejectPost
} from "./../../../../store/modules/posts/actions";
import image from "../../../../assets/images/avatar.jpg";
import "./PostListItem.css";
import FontAwesome from "react-fontawesome";
import { Panel, Col, Image, Badge, Button } from "react-bootstrap";

class PostListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.postApproval = this.postApproval.bind(this);
    this.postRejection = this.postRejection.bind(this);
  }
  postApproval(id) {
    this.props.approvePost(id);
  }
  postRejection(id) {
    this.props.rejectPost(id);
  }
  render() {
    return (
      <Panel className="post">
        <Col xs={2} sm={1} md={1} className="user-info text-center">
          <Badge className="active" />
          {this.props.data.userpic
            ? <Avatar src={this.props.data.userpic} size={40} />
            : <Image src={image} alt="Avatar" rounded />}
          <hr />
        </Col>
        <Col xs={8} sm={8} md={9} className="post-text">
          <Link to={"/admin/posts/" + this.props.data.id}>
            <h2>
              {this.props.data.title}
            </h2>
          </Link>
          <p>
            {this.props.data.content}
          </p>
        </Col>
        <Col xs={2} sm={2} md={2} className="post-info text-center">
          <div className="comments">
            <div className="commentbg">
              560
              <div className="mark" />
            </div>
          </div>
          <div className="views">
            <FontAwesome
              className="view-icon"
              name="eye"
              style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
            />{" "}
            1,568
          </div>
          <div className="time">
            <FontAwesome
              className="time-icon"
              name="clock-o"
              style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
            />{" "}
            2days
          </div>
        </Col>
        {this.props.data.status === "pending"
          ? <div className="pull-right">
              <Button
                onClick={() => this.postApproval(this.props.data.id)}
                className="btn-xs btn-success"
              >
                Approve
              </Button>
              <span> </span>
              <Link to="/admin">
                <Button
                  onClick={() => this.postRejection(this.props.data.id)}
                  className="btn-xs btn-danger"
                >
                  Reject
                </Button>
              </Link>
            </div>
          : ""}
      </Panel>
    );
  }
}
function mapStateToProps({ postsState }) {
  return {
    post: postsState.selected_post,
    isFetchingSinglePost: postsState.isFetchingSinglePost
  };
}
export default connect(mapStateToProps, { approvePost, rejectPost })(
  PostListItem
);
