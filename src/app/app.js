import React, { Component } from 'react';
import CategoriesList from './home/container/categories_list';
import Header from './home/container/header';

export default class App extends Component {

  onSearched(keyword) {
    console.log(keyword);
  }

  render() {
    return (
      <div className = "home_page">
        <Header className = "header"/>
        <div className = "lists">
          { this.props.children }
          <CategoriesList/>
        </div>
      </div>
    );
  }
}