import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  newCategoryCreate, 
  selectedCategory, 
  categoryUpdate 
  } from '../../../../store/modules/categories/actions';
import { Link } from 'react-router-dom';	
import _ from 'lodash';

import {
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  Panel
} from "react-bootstrap";


class CategoriesNew extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    var category_id = this.props.match.params.category_id;
    
    if (category_id) {
      console.log('category id:', category_id);
      this.props.selectedCategory(category_id);
      this.setState({ category_id });
      this.setState({category:this.props.category})
    }
  }

  handleSubmit(event) { 
    event.preventDefault();
    var category_id= _.uniqueId();
    var title = this.title.value.trim();
    var desc = this.desc.value.trim();
    this.props.newCategoryCreate({
      category_id: category_id,
      title: title,
      desc: desc
    });
    this.category_id = "";
    this.title.value = "";
    this.desc.value = "";

    setTimeout(function () { window.location.replace("/"); }, 10)
  }

  handleUpdate(event) {
    event.preventDefault();
    var title = this.title.value.trim();
    var desc = this.desc.value.trim();

    this.props.categoryUpdate({
      title: title,
      desc: desc
    }, this.props.match.params.category_id);
    this.title.value = "";
    this.desc.value = "";

    setTimeout(function () { window.location.replace("/"); }, 10)
  }



	render() {
    const { categoriesId, categories } = this.props;
    var categoriesArr = categoriesId.map(id => (Object.assign({}, categories[id], {category_id: id})))
    
    var category_id = this.props.category.category_id;
    console.log('Category id for click:', category_id);
    var title = this.props.category.title;
    console.log('titlt', title);
    var desc = this.props.category.desc;

		return (
      <Panel key={category_id}>
        <form onSubmit={ category_id ? this.handleUpdate.bind(this) : this.handleSubmit.bind(this)}>
          <h3>{category_id ? "Edit category" : "Create a New Category"}</h3>
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
              defaultValue={desc}
              inputRef={ref => {
                this.desc = ref;
              }}
              placeholder="Enter description"
            />
          </FormGroup>
          <Button className="btn-primary" type="submit">
            {category_id ? "Update" : "Submit"}
          </Button>
          <span>  </span>
          <Link to="/" className="btn btn-danger">Cancel </Link>
        </form>
      </Panel>
		);
	}
}

function mapStateToProps(state) {
      console.log('selected cat:', state.categoriesState.selected_category);
  return {
    categoriesId: state.categoriesState.ids,
    categories: state.categoriesState.categories,
    category: state.categoriesState.selected_category,
    formloaded: state.postsState.formloaded
  };
}  

export default connect(mapStateToProps, { 
  newCategoryCreate, 
  selectedCategory,
  categoryUpdate
})(CategoriesNew);
