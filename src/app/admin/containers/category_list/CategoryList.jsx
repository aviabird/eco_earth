import { connect } from "react-redux";
import "./CategoryList.css";
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
import { Link } from "react-router-dom";

class AdminCategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    //this.onClicked = this.onClicked.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
    this.selectedcategory = this.selectedcategory.bind(this);
  }

  getInitialState() {
    return { data: { comments: [] } };
  }

  componentDidMount() {
    this.props.fetchCategories();
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
    const id = data.id;
    const title = data.title;
    const desc = data.description;

    return (
      <li key={data.id} className="list-group-item">
        <CategoryListItem title={title} desc={desc} />

        <Col className="row pull-right">
          <Col lg={6} md={6}>
            <Link to={"/admin/category/edit/" + id}>
              <Glyphicon
                //onClick={() => this.selectedcategory(id)}
                className="pull-left"
                glyph="pencil"
              />
            </Link>
          </Col>
          <Col lg={6} md={6}>
            <Glyphicon
              onClick={() => this.onDeleteClick(id)}
              className="pull-right"
              glyph="remove"
            />
          </Col>
        </Col>
      </li>
    );
  }

  render() {
    const { categoriesId, categories } = this.props;
    var categoriesArr = categoriesId.map(id =>
      Object.assign({}, categories[id], { id: id })
    );
    console.log(categoriesArr);
    return (
      <Panel className="cat-list">
        <div>
          <h5>Categories: </h5>
        </div>
        <div onClick={() => this.selectedcategory()} className="text-xs-right">
          <Link to="/admin/new_category" className="btn btn-primary">
            Add New
          </Link>
        </div>
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

function mapStateToProps({ categoriesState }) {
  return {
    categoriesId: categoriesState.categoryids,
    categories: categoriesState.categories,
    isFetchingCategories: categoriesState.isFetchingCategories
  };
}

export default connect(mapStateToProps, {
  fetchCategories,
  deleteCategory,
  selectedCategory,
  fetchPostsByCategory
})(AdminCategoryList);
