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
  }
  componentWillMount() {
    var postId = this.props.match.params.postId;

    if (postId) {
      this.props.selectedPost(postId);
    }
    this.setState({ postId });
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
      content: content
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
  onClick(evt) {
    this.setState({ title: evt.target.value });
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
    var postId = this.state.postId;
    var title = this.props.post.title;
    var content = this.props.post.content;
    //var loaded = this.props.formloaded;
    console.log(title, content);
    return (
      <Panel>
        <form
          onSubmit={
            postId ? this.handleUpdate.bind(this) : this.handleSubmit.bind(this)
          }
        >
          <h3>
            {postId ? "Edit post" : "Create a New Post"}
          </h3>
          <FormGroup key={title} controlId="formControlsText">
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
          <FormGroup  controlId="formControlsSelect">
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
          <FormGroup key={content} controlId="formControlsTextarea">
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
            {postId ? "Update" : "Submit"}
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
    formloaded: state.postsState.formloaded
  };
}

export default connect(mapStateToProps, {
  selectedPost,
  newpostCreate,
  postUpdate
})(PostCreate);