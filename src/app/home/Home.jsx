import React, { Component } from 'react';
import './Home.scss';
import Header from './containers/header/Header';
import CategoryList from './containers/category_list/CategoryList.jsx';
import PostList from './containers/post_list/PostList';
import PostDetail from './../post/containers/post_detail/PostDetail';
import { Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="lists">
          <Route exact path="/" component={PostList} />
          <Route exact path="/posts/:postId" component={PostDetail}/>
          <CategoryList className="categories-list" />
        </div>
      </div>
    );
  }
}

export default Home;
