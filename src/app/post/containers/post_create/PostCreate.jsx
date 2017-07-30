import React, { Component } from "react";
import { connect } from "react-redux";
import {
  selectedPost,
  newpostCreate,
  postUpdate
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
    this.state = {
      isValidData: false
    };
  }

  componentWillMount() {
    var postId = this.props.match.params.postId;

    if (postId) {
      this.props.selectedPost(postId);
    }
  }
  componentDidMount() {
    this.setState({ isValidData: false });
  }

  validateHandler() {
    this.setState({
      isValidData: !!(this.title.value && this.content.value),
      title: this.title.value,
      content: this.content.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var title = this.title.value.trim();
    var category_id = this.category.value.trim();
    var content = this.content.value.trim();
    this.props.newpostCreate({
      title: title,
      status: "pending",
      category_id: category_id,
      content: content,
      userid: this.props.user.uid,
      userpic: this.props.user.photoURL
    });
    this.title.value = "";
    this.category.value = "";
    this.content.value = "";
  }

  handleUpdate(event) {
    event.preventDefault();
    var title = this.title.value.trim();
    var category_id = this.category.value.trim();
    var content = this.content.value.trim();
    this.props.postUpdate(
      {
        title: title,
        category_id: category_id,
        content: content
      },
      this.props.match.params.postId
    );
    this.title.value = "";
    this.category.value = "";
    this.content.value = "";
  }

  renderCategories(data) {
    return (
      <option value={data.id} key={data.id}>
        {data.title}
      </option>
    );
  }
  render() {
    const { categoryids, categories } = this.props;
    var categoriesArr = categoryids.map(id =>
      Object.assign({}, categories[id], { id: id })
    );
    var { title, content } = this.props.post;
    var loaded = this.props.formloaded;
    if (loaded) {
      setTimeout(function() {
        window.location.replace("/");
      }, 10);
    }
    return (
      <Panel key={title}>
        <form
          onSubmit={
            title ? this.handleUpdate.bind(this) : this.handleSubmit.bind(this)
          }
        >
          <h3>
            {title ? "Edit post" : "Create a New Post"}
          </h3>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              inputRef={ref => {
                this.title = ref;
              }}
              placeholder="Enter title"
              defaultValue={title}
              onChange={this.validateHandler.bind(this)}
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
              {categoriesArr.map(this.renderCategories)}
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Content</ControlLabel>
            <FormControl
              componentClass="textarea"
              defaultValue={content}
              onChange={this.validateHandler.bind(this)}
              inputRef={ref => {
                this.content = ref;
              }}
            />
          </FormGroup>

          <Button
            disabled={!this.state.isValidData}
            className="btn-primary"
            type="submit"
          >
            {title ? "Update" : "Submit"}
          </Button>
          <span> </span>
          <Link to="/" className="btn btn-danger">
            Cancel{" "}
          </Link>
        </form>
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return {
    categoryids: state.categoriesState.categoryids,
    categories: state.categoriesState.categories,
    post: state.postsState.selected_post,
    formloaded: state.postsState.formloaded,
    user: state.auth.currentUser
  };
}

export default connect(mapStateToProps, {
  selectedPost,
  newpostCreate,
  postUpdate
})(PostCreate);
