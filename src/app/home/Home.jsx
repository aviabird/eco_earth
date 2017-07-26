import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Home.css";
import CarouselSlide from "../../shared/components/carousel/Carousel";
import Header from "./containers/header/Header";
import CategoryList from "./containers/category_list/CategoryList.jsx";
import PostList from "./containers/post_list/PostList";
import PostDetail from "./../post/containers/post_detail/PostDetail";
import PostCreate from "./../post/containers/post_create/PostCreate";
import MyProfile from "./../Users/UserProfile";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <CarouselSlide />
        <Header className="header" />
        <section className="content">
          <div className="container">
            <Col className="row">
              <Col lg={8} md={8}>
                <Route
                  exact
                  path="/"
                  component={PostList}
                  className="post_list"
                />
                <Route path="/post/edit/:postId" component={PostCreate} />
                <Route
                  path="/posts/:postId"
                  component={PostDetail}
                  className="post_detail"
                />
                <Route
                  path="/create_new"
                  // component={PostCreate}
                  render={() => {
                    return this.props.isLoggedIn
                      ? <PostCreate {...this.props} />
                      : <h1>Please sign in!!!</h1>;
                  }}
                />
                <Route path="/categories/:category" component={PostList} />
                <Route path="/myprofile/:name" component={MyProfile} />
                <Route path="/myprofile/:name" component={PostList} />
                <Route path="/editprofile/:name" component={MyProfile} />
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

//export default Home;
function mapStateToProps({ auth }, ownProps) {
  return {
    isLoggedIn: auth.isAuthenticated
  };
}

export default withRouter(connect(mapStateToProps)(Home));
