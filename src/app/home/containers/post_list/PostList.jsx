import { connect } from "react-redux";
import React, { Component } from "react";
import PostListItem from "../../components/post_list_item/PostListItem";
import PropTypes from "prop-types";
import { fetchPosts } from "../../../../store/modules/posts/actions";
import "./PostList.css";
import { Panel } from "react-bootstrap";
import { Motion, spring } from "react-motion";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPost(postData) {
    return (
      <Motion
        key={postData.id}
        defaultStyle={{ y: 50, o: 0 }}
        style={{
          y: spring(0, { stiffness: 160, damping: 10 }),
          o: spring(1, { precision: 0.001 })
        }}
      >
        {value =>
          <div
            style={{ transform: `translateY(${value.y}px)`, opacity: value.o }}
          >
            <PostListItem data={postData} />
          </div>}
      </Motion>
    );
  }

  loadingPosts(index) {
    return (
      <Motion
        key={index}
        defaultStyle={{ y: 200, o: 0 }}
        style={{
          y: spring(0, { stiffness: 160, damping: 15 }),
          o: spring(1, { precision: 0.001 })
        }}
      >
        {value =>
          <Panel
            style={{ transform: `translateY(${value.y}px)`, opacity: value.o }}
            className="timeline-wrapper"
            key={index}
          >
            <div className="timeline-item">
              <div className="animated-background">
                <div className="background-masker image" />
                <div className="background-masker header-right" />
                <div className="background-masker header-bottom" />
                <div className="background-masker paragraph1-bottom" />
                <div className="background-masker paragraph2-bottom" />
                <div className="background-masker paragraph3-bottom" />
                <div className="background-masker paragraph4-bottom" />
              </div>
            </div>
          </Panel>}
      </Motion>
    );
  }

  render() {
    const { postids, posts, isFetchingPosts } = this.props;
    if (isFetchingPosts) {
      return (
        <div>
          {[...Array(5)].map((val, i) => this.loadingPosts(i))}
        </div>
      );
    }

    var postsArr = postids.map(id => Object.assign({}, posts[id], { id: id }));

    if (!postsArr) {
      return <h4> No Posts Available </h4>;
    }

    return (
      <div className="post-list">
        {!postsArr.length ? <h4> No Posts Available </h4> : null}
        {postsArr.map(this.renderPost)}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.object
};

function mapStateToProps({ postsState }, ownProps) {
  const { postids, posts, isFetchingPosts } = postsState;
  return { postids, posts, isFetchingPosts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
