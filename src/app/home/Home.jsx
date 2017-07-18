import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Home.css';
import CarouselSlide from '../../shared/components/carousel/Carousel';
import Header from './containers/header/Header';
import CategoryList from './containers/category_list/CategoryList.jsx';
import PostList from './containers/post_list/PostList';
import PostDetail from './../post/containers/post_detail/PostDetail';
import PostCreate from './../post/containers/post_create/PostCreate';
import { Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <CarouselSlide />
        <Header className="header" />
        <section className="content">
          <div className="container">
            <Col className="row">
              <Col lg={8} md={8}>
                <Route exact path="/" component={PostList} className="post_list"/>
                <Route path="/post/edit/:postId" component={PostCreate} />
                <Route path="/posts/:postId" component={PostDetail} className="post_detail"/>
                <Route path="/create_new" component={PostCreate} />
                <Route path="/categories/:category" component={PostList}/>
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

export default Home;
