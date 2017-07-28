import { connect } from "react-redux";
import "./CategoryList.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import CategoryListItem from "../../components/category_list_item/CategoryListItem";
//import PropTypes from "prop-types";
import {
  fetchCategories,
  deleteCategory,
  selectedCategory
} from "../../../../store/modules/categories/actions";
import { fetchPostsByCategory } from "../../../../store/modules/posts/actions";
import { Panel, Glyphicon, Col } from "react-bootstrap";
import Loader from "../../../../shared/components/loader/Loader";

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.selectedcategory = this.selectedcategory.bind(this);
    this.onClicked = this.onClicked.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  onClicked(category_id) {
    this.props.fetchPostsByCategory(category_id);
  }
  onDeleteClick(category_id) {
    this.props.deleteCategory(category_id);
    setTimeout(function() {
      window.location.replace("/");
    }, 10);
  }

  selectedcategory(category_id) {
    this.props.selectedCategory(category_id);
  }

  renderCategories(data) {
    const category_id = data.id;
    const title = data.title;
    const description = data.description;
    let user = this.props.user;
    return user && !user.isAdmin
      ? <Link key={category_id} to={"/categories/" + category_id}>
          <li
            onClick={() => this.onClicked(category_id)}
            className="list-group-item"
          >
            <CategoryListItem title={title} description={description} />
          </li>
        </Link>
      : <li key={category_id} className="list-group-item">
          <CategoryListItem title={title} description={description} />

          <Col className="row pull-right">
            <Col lg={6} md={6}>
              <Link to={"/admin/category/edit/" + category_id}>
                <Glyphicon
                  //onClick={() => this.selectedcategory(id)}
                  className="pull-left"
                  glyph="pencil"
                />
              </Link>
            </Col>
            <Col lg={6} md={6}>
              <Glyphicon
                onClick={() => this.onDeleteClick(category_id)}
                className="pull-right"
                glyph="remove"
              />
            </Col>
          </Col>
        </li>;
  }

  render() {
    const { categoryids, categories, user } = this.props;
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
        {user && user.isAdmin
          ? <div
              onClick={() => this.selectedcategory()}
              className="text-xs-right"
            >
              <Link to="/admin/new_category" className="btn btn-primary">
                Add New
              </Link>
            </div>
          : ""}
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

function mapStateToProps({ categoriesState, auth }, ownProps) {
  return {
    user: auth.currentUser,
    categoryids: categoriesState.categoryids,
    categories: categoriesState.categories,
    isFetchingCategories: categoriesState.isFetchingCategories
  };
}

export default connect(mapStateToProps, {
  fetchCategories,
  deleteCategory,
  selectedCategory,
  fetchPostsByCategory
})(CategoryList);
