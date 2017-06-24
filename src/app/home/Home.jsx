import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Home.css';
import Banner from '../../shared/components/banner/Banner';
import Header from './containers/header/Header';
import CategoryList from './containers/category_list/CategoryList.jsx';
import PostList from './containers/post_list/PostList';
import PostDetail from './../post/containers/post_detail/PostDetail';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Banner />
        <Header className="header" />
        <div className="lists">
          <Route exact path="/" component={PostList} className="post_list"/>
          <Route path="/posts/:postId" component={PostDetail} className="post_detail"/>
          <CategoryList className="categories-list" />
        </div>
      </div>
    );
  }
}

export default Home;
