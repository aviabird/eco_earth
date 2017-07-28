import React, { Component } from "react";
import { connect } from "react-redux";
import {
  newCategoryCreate,
  selectedCategory,
  categoryUpdate
} from "../../../../store/modules/categories/actions";
import { Link } from "react-router-dom";
//import { withRouter } from "react-router-dom";

import {
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  Panel
} from "react-bootstrap";

class AdminCategoryNew extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    var id = this.props.match.params.category_id;
    this.props.selectedCategory(id);
    console.log("will mount");
    if (id) {
      this.setState({ category_id: id });
    }
  }
  componentDidUpdate(newProps) {
    if (this.props.location !== newProps.location) {
      var id = this.props.match.params.category_id;
      this.props.selectedCategory(id);
      if (id) {
        this.setState({ category_id: id });
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    var title = this.title.value.trim();
    var description = this.description.value.trim();
    this.props.newCategoryCreate({
      title: title,
      description: description
    });
    this.title.value = "";
    this.description.value = "";

    setTimeout(function() {
      window.location.replace("/");
    }, 10);
  }

  handleUpdate(event) {
    event.preventDefault();
    var title = this.title.value.trim();
    var description = this.description.value.trim();

    this.props.categoryUpdate(
      {
        title: title,
        description: description
      },
      this.state.category_id
    );
    this.title.value = "";
    this.description.value = "";

    setTimeout(function() {
      window.location.replace("/");
    }, 10);
  }

  render() {
    const { category } = this.props;
    if (category) {
      var category_id = this.state.category_id;
      //var id = category.id;
      var title = category.title;
      var description = category.description;
    }

    return (
      <Panel key={title}>
        <form
          onSubmit={
            category_id
              ? this.handleUpdate.bind(this)
              : this.handleSubmit.bind(this)
          }
        >
          <h3>
            {category_id ? "Edit category" : "Create a New Category"}
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
            />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="textarea"
              defaultValue={description}
              inputRef={ref => {
                this.description = ref;
              }}
              placeholder="Enter description"
            />
          </FormGroup>
          <Button className="btn-primary" type="submit">
            {category_id ? "Update" : "Submit"}
          </Button>
          <span> </span>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </form>
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.categoriesState.selected_category,
    formloaded: state.postsState.formloaded
  };
}

export default connect(mapStateToProps, {
  newCategoryCreate,
  selectedCategory,
  categoryUpdate
})(AdminCategoryNew);
