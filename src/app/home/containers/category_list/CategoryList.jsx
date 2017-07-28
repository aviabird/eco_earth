import { connect } from "react-redux";
import "./CategoryList.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import CategoryListItem from "../../components/category_list_item/CategoryListItem";
//import PropTypes from "prop-types";
import { fetchCategories } from "../../../../store/modules/categories/actions";
import { fetchPostsByCategory } from "../../../../store/modules/posts/actions";
import { Panel } from "react-bootstrap";
import Loader from "../../../../shared/components/loader/Loader";

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
    this.props.fetchPostsByCategory(category_id);
  }

  renderCategories(data) {
    const category_id = data.id;
    const title = data.title;
    const description = data.description;

    return (
      <Link key={category_id} to={"/categories/" + category_id}>
        <li
          onClick={() => this.onClicked(category_id)}
          className="list-group-item"
        >
          <CategoryListItem title={title} description={description} />
        </li>
      </Link>
    );
  }

  render() {
    const { categoryids, categories } = this.props;
    var categoriesArr = categoryids.map(id =>
      Object.assign({}, categories[id], { id: id })
    );
    if (!categoriesArr) {
      return <h1>No posts with this category</h1>;
    }
    return (
      <Panel className="cat-list">
        <h5>Categories: </h5>
        <hr />
        <ul>
          {this.props.isFetchingCategories ? <Loader /> : null}
          {categoriesArr.map(this.renderCategories)}
        </ul>
      </Panel>
    );
  }
}

// CategoryList.propTypes = {
//   categories: PropTypes.object
// };

//function mapStateToProps(state) {
function mapStateToProps({ categoriesState }, ownProps) {
  return {
    categoryids: categoriesState.categoryids,
    categories: categoriesState.categories,
    isFetchingCategories: categoriesState.isFetchingCategories
  }; //{weather}==={weather:weather}
}

export default connect(mapStateToProps, {
  fetchCategories,
  fetchPostsByCategory
})(CategoryList);
