import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Home.css";
//import Banner from '../../shared/components/banner/Banner';
import Header from "./containers/header/Header";
import CategoryList from "./containers/category_list/CategoryList.jsx";
import PostList from "./containers/post_list/PostList";
import PostDetail from "./post/containers/post_detail/PostDetail";
import { Col } from "react-bootstrap";
import CategoryNew from "./containers/category_new/CategoryNew.jsx";

class AdminHome extends Component {
  render() {
    return (
      <div className="home">
        <Header className="header" />
        <section className="content">
          <div className="container">
            <Col className="row">
              <Col lg={8} md={8}>
                <Route
                  exact
                  path="/admin"
                  component={PostList}
                  className="post_list"
                />
                <Route
                  path="/admin/posts/:postId"
                  component={PostDetail}
                  className="post_detail"
                />
                <Route path="/admin/new_category" component={CategoryNew} />
                <Route
                  path="/admin/category/edit/:category_id"
                  component={CategoryNew}
                />
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
