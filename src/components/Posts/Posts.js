import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../Redux/Actions/PostAction";
import Spinner from "../../utili/Spinner";
import AddPost from "./AddPost";
import PostItem from "./PostItem";

const Posts = ({ getPosts, post: { loading, posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="largee text-primarys">Posts</h1>
          <p className="leadd">
            <i className="fas fa-user"></i> Welcome to the community
          </p>
          <AddPost />

        <div className="posts">
          {
            posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))
          }
        </div>

        </>
      )}
    </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, {
  getPosts,
})(Posts);
