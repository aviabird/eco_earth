import { connect } from "react-redux";
import "./CategoryList.css";
import React, { Component } from "react";
import CategoryListItem from "../../components/category_list_item/CategoryListItem";
//import PropTypes from "prop-types";
import { fetchCategories } from "../../../../store/modules/categories/actions";
import { fetchPostsByCategory } from "../../../../store/modules/posts/actions";
import { Panel, Glyphicon, Col } from 'react-bootstrap';
import Loader from '../../../../shared/components/loader/Loader';
import { Link } from 'react-router-dom';

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    //this.onClicked = this.onClicked.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
  }

  getInitialState(){
      return {data: {comments:[]}};
    }

  componentDidMount() {
    this.props.fetchCategories();
  } 


  renderCategories(data) {
    const category_id = data.category_id;
    const title = data.title;
    const desc = data.desc;

    return (
      <li
        key={data.category_id}        
        className="list-group-item"
      > 
        
        <CategoryListItem 
          title={title} 
          desc={desc} /> 
        
        <Col className="row pull-right">
          <Col lg={6} md={6}>
            <Link to={"/categories/edit/" + category_id}>
              <Glyphicon className="pull-left" glyph="pencil" />
            </Link> 
          </Col>
          <Col lg={6} md={6}>
            <Link to="/">
              <Glyphicon className="pull-right" glyph="remove" />
            </Link>    
          </Col>
        </Col>
        
      </li>
        
    );
  }

  render() {
    const { categoriesId, categories } = this.props;
    var categoriesArr = categoriesId.map(id => (Object.assign({}, categories[id], {category_id: id})))
    return (
      <Panel className="cat-list">
        <div>
          <h5>Categories: </h5>
        </div>
        <div className="text-xs-right">
          <Link to="/categories/new" className="btn btn-primary">
            New
          </Link> 
        </div>
        <hr/>
        <ul>

          {this.props.isFetchingCategories ? <Loader /> : null }
          {categoriesArr.map(this.renderCategories)}
        </ul>
      </Panel>
    );
  }
}

// CategoryList.propTypes = {
//   categories: PropTypes.object
// };

function mapStateToProps({categoriesState}) {
  return {
    categoriesId: categoriesState.ids,
    categories: categoriesState.categories,
    currentURL: categoriesState.currentURL,
    isFetchingCategories: categoriesState.isFetchingCategories
  };
}

export default connect(
  mapStateToProps,
  {
    fetchCategories,
    fetchPostsByCategory
  }
)(CategoryList);
