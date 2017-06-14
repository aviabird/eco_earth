import React, { Component } from 'react';
import CategoriesList from './home/container/categories_list';
import Searchbar from './home/component/searchbar';

export default class App extends Component {

  onSearched(keyword) {
    console.log(keyword);
  }

  render() {
    return (
      <div className="home_page">
        <Searchbar onSearched={(keyword) => this.onSearched(keyword)} />
        <div className="lists">
          {this.props.children}
          <CategoriesList/>
        </div>
      </div>
    );
  }
}