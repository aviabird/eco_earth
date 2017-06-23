import { connect } from "react-redux";
import "./CategoryList.css";
import React, { Component } from "react";
import CategoryListItem from "../../components/category_list_item/CategoryListItem";
import PropTypes from "prop-types";
import { fetchCategories } from "../../../../store/modules/categories/actions";
import { fetchPostsByCategory } from "../../../../store/modules/posts/actions";



class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onClicked = this.onClicked.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  onClicked(category_id) {
    this.props.fetchPostsByCategory(category_id)
  }

  renderCategories(data) {
    const category_id = data.id;
    const title = data.title;
    const desc = data.desc;

    return (
      <li
        key={data.id}
        onClick={() => this.onClicked(category_id)}
        className="categories-list list-group-item"
      >
        <CategoryListItem title={title} desc={desc} />
      </li>
    );
  }

  render() {
    if (!this.props.categories) {
      return <h5>Loading Categories</h5>;
    }

    return (
      <ul className="category_list">
        Categories: {this.props.categories.map(this.renderCategories)}
      </ul>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.array
};

//function mapStateToProps(state) {
function mapStateToProps({categoriesState}) {
  return { categories: categoriesState.categories }; //{weather}==={weather:weather}
}

export default connect(
  mapStateToProps,
  {
    fetchCategories,
    fetchPostsByCategory
  }
)(CategoryList);
