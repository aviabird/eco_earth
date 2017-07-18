import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Home.css';
//import Banner from '../../shared/components/banner/Banner';
import Header from './containers/header/Header';
import CategoryList from './containers/category_list/CategoryList.jsx';
import PostList from './containers/post_list/PostList';
import PostDetail from './../post/containers/post_detail/PostDetail';
import { Col } from 'react-bootstrap';
import CategoriesNew from './containers/category_new/CategoryNew.jsx';

class AdminHome extends Component {
  render() {
    return (
      <div className="home">
        <Header className="header" />
        <section className="content">
          <div className="container">
            <Col className="row">
              <Col lg={8} md={8}>
                <Route exact path="/" component={PostList} className="post_list"/>
                <Route path="/posts/:postId" component={PostDetail} className="post_detail"/>                
                <Route path="/categories/new" component={CategoriesNew} />
                <Route path="/categories/edit/:category_id" component={CategoriesNew} />
              </Col>
              <Col lg={4} md={4}>
                <CategoryList className="categories-list" />
              </Col>
            </Col>
          </div>
        </section>
      </div>
    );
  }
}

export default AdminHome;

