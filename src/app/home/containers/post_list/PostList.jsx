import { connect } from 'react-redux';
import React, { Component } from 'react';
import PostListItem from '../../components/post_list_item/PostListItem';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../../../store/modules/posts/actions'
import './PostList.css';
import { Col } from 'react-bootstrap';
import Loader from '../../../../shared/components/loader/Loader';
import { Panel } from 'react-bootstrap';

class PostList extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts(postData) {
    return (<PostListItem data={postData} key={postData.id} />);
  }

  loadingPosts() {
    return (
      <Panel className="timeline-wrapper">
        <div className="timeline-item">
          <div className="animated-background">
              <div className="background-masker image"></div>
              <div className="background-masker header-right"></div>
              <div className="background-masker header-bottom"></div>
              <div className="background-masker paragraph1-bottom"></div>
              <div className="background-masker paragraph2-bottom"></div>
              <div className="background-masker paragraph3-bottom"></div>
              <div className="background-masker paragraph4-bottom"></div>
          </div>
        </div>
      </Panel>
    );
  }

  render() {
    const { posts, isFetchingPosts } = this.props;
    if (isFetchingPosts) {
      return (
        <div>
          {[...Array(5)].map(() => this.loadingPosts())}
        </div>
      )
    }
    if (!posts) { return <h4> No Posts Available </h4>; }

    return (
      <div className="post-list" >
        {!posts.length ? <h4> No Posts Available </h4> : null}
        {posts.map(this.renderPosts)}
      </div>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.array
};

function mapStateToProps({ postsState }, ownProps) {
  const { posts, isFetchingPosts } = postsState;
  return { posts, isFetchingPosts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);