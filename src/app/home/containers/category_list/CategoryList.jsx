import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import CategoryListItem from '../../components/category_list_item/CategoryListItem';
import * as categoryEffects from '../../../../store/categories/effects';
import * as postsEffects from '../../../../store/posts/effects';
import PropTypes from 'prop-types';

class CategoryList extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    initialState();
    this.onClicked = this.onClicked.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentWillMount() {
    this.props.effects.fetchCategories()
      .then(() => this.setState({ loadingCategories: false }))
      .catch(error => {
        console.log(error);
      });
  }

  initialState() {
    this.setState({ loadingCategories: true });
  }

  onClicked(category_id) {
    this.props.effects.getPostListFor(category_id)
      .then(() => console.log('Loading Category Posts'))
      .catch(error => {
        console.log(error);
      })
  }

  renderCategories(data) {
    const category_id = data.id;
    const title = data.title;
    const desc = data.desc;

    return (
      <li
        key={data.id}
        onClick={() => this.onClicked(category_id)}
        className="categories-list list-group-item">
        <CategoryListItem title={title} desc={desc} />
      </li>
    );
  }

  render() {
    if (this.state.loadingCategories) {
      return (
        <h5>Loading Categories</h5>
      )
    }

    return (
      <ul>
        Categories: {this
          .props
          .categories
          .map(this.renderCategories)}
      </ul>
    )
  }

}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  effects: PropTypes.object.isRequired
};

//function mapStateToProps(state) {
function mapStateToProps(state) {
  return { categories: state.categories.categories }; //{weather}==={weather:weather}
}

function mapDispatchToProps(dispatch) {
  return {
    effects: bindActionCreators(
      { ...categoryEffects, ...postsEffects },
      dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);