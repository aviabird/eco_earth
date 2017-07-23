import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
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

    this.state = {};
    window.count = 0;
  }

  componentWillMount() {
    var postId = this.props.match.params.postId;

    if (postId) {
      this.props.selectedPost(postId);
    }
  }

  // componentWillReceiveProps(nextprops) {
  //   console.log("new props", nextprops.post.title);
  //   this.setState({ title: nextprops.post.title });
  // }
  handleSubmit(event) {
    event.preventDefault();
    var id = _.uniqueId();
    var title = this.title.value.trim();
    var category_id = this.category.value.trim();
    var content = this.content.value.trim();
    this.props.newpostCreate({
      id: id,
      title: title,
      category_id: category_id,
      content: content,
      userid: this.props.user.uid
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
    var { title, content, id } = this.props.post;
    //var loaded = this.props.formloaded;
    return (
      <Panel key={id}>
        <form
          onSubmit={
            id ? this.handleUpdate.bind(this) : this.handleSubmit.bind(this)
          }
        >
          <h3>
            {id ? "Edit post" : "Create a New Post"}
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
              //value={this.state.title}
              //onChange={this.onClick.bind(this)}
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
              inputRef={ref => {
                this.content = ref;
              }}
            />
          </FormGroup>

          <Button className="btn-primary" type="submit">
            {id ? "Update" : "Submit"}
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
