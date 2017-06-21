import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../../../../store/categories/actions';
import { fetchpostsbyCategory } from '../../../../store/posts/actions';
import CategoryListItem from '../../components/category_list_item/CategoryListItem';

class CategoryList extends Component {

  constructor(props) {
    super(props);

    this
      .props
      .fetchCategories();

    this.onClicked = this
      .onClicked
      .bind(this);
    this.renderCategories = this
      .renderCategories
      .bind(this);
  }

  onClicked(category_id) {
    this.props.selectedCategory(category_id);
  }

  renderCategories(data) {
    const category_id = data.id;
    const category = data.category;
    return (
      <li key = { data.id } onClick = { () => this.onClicked(category_id) } className = "categories-list list-group-item">
        <CategoryListItem category = { category }/>
      </li>
    );
  }

  render() {
    return (
      <ul>
        Categories:
        { this.props.categories.map(this.renderCategories) }
      </ul>
    )
  }

}

//function mapStateToProps(state) {
function mapStateToProps(state) {
  return { categories: state.categories.categories }; //{weather}==={weather:weather}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCategories, selectedCategory: fetchpostsbyCategory //binding this actioncreator to properties
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);