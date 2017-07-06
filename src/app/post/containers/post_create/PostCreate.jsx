import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedPost } from "./../../../../store/modules/posts/actions";
import "./PostCreate.css";
import { FormControl, FormGroup, ControlLabel, Button } from "react-bootstrap";

class PostCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentWillMount() {
    var postId = this.props.match.params.postId;
    
    if(postId ){
      this.props.selectedPost(postId);
      this.setState({ postId });
    }
  }
  renderCategories(data) {
    return <option value={data.title} key={data.id}>{data.title}</option>;
  }
  render() {
    var postId = this.state.postId;
    var title = this.props.post.title;
    var content = this.props.post.content;
    return (
      <form>
        <h3>{postId?"Edit post":"Create a New Post"}</h3>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Title</ControlLabel>
          <FormControl type="text" placeholder="Enter title"  defaultValue={title}/>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Category</ControlLabel>
          <FormControl componentClass="select" placeholder="Select category">
            {this.props.categories.map(this.renderCategories)}
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Content</ControlLabel>
          <FormControl type="textarea" defaultValue={content}/>
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoriesState.categories,
    post: state.postsState.selected_post
  };
}

export default connect(mapStateToProps, { selectedPost })(PostCreate);
