import React, { Component } from "react";
import { connect } from "react-redux";
import {
  selectedPost,
  newpostCreate
} from "./../../../../store/modules/posts/actions";
import { Link } from "react-router-dom";
import "./PostCreate.css";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  Panel
} from "react-bootstrap";

class PostCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentWillMount() {
    var postId = this.props.match.params.postId;

    if (postId) {
      this.props.selectedPost(postId);
      this.setState({ postId });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    var title = this.title.value.trim();
    var category = this.category.value.trim();
    var content = this.content.value.trim();
    this.props.newpostCreate({
      title: title,
      category: category,
      content: content
    });
    this.title.value = "";
    this.category.value = "";
    this.content.value = "";
  }

  renderCategories(data) {
    return <option value={data.title} key={data.id}>{data.title}</option>;
  }
  render() {
    var postId = this.state.postId;
    var title = this.props.post.title;
    var content = this.props.post.content;
    //var loaded = this.props.formloaded;
    return (
      <Panel>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h3>{postId ? "Edit post" : "Create a New Post"}</h3>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              inputRef={ref => {
                this.title = ref;
              }}
              placeholder="Enter title"
              defaultValue={title}
            />
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Category</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="Select category"
              inputRef={ref => {
                this.category = ref;
              }}
            >
              {this.props.categories.map(this.renderCategories)}
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Content</ControlLabel>
            <FormControl
              type="textarea"
              defaultValue={content}
              inputRef={ref => {
                this.content = ref;
              }}
            />
          </FormGroup>
          <Button className="btn-primary" type="submit">
            {postId ? "Update" : "Submit"}
          </Button>
          <span>  </span>
          <Link to="/" className="btn btn-danger">Cancel </Link>
        </form>
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoriesState.categories,
    post: state.postsState.selected_post,
    formloaded: state.postsState.formloaded
  };
}

export default connect(mapStateToProps, { selectedPost, newpostCreate })(
  PostCreate
);
