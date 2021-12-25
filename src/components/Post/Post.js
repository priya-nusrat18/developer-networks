import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getSinglePost } from "../../Redux/Actions/PostAction";
import Spinner from "../../utili/Spinner";
import PostItem from "../Posts/PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
const Post = ({ getSinglePost, post: { loading, post } }) => {
  const { id } = useParams();
  useEffect(() => {
    getSinglePost(id);
  }, [getSinglePost, id]);
  return (
    <div className="container">
      {loading || post === null ? (
        <Spinner />
      ) : (
        <div className="mt-3">
            <Link to ='/posts' className="btns btns-primarys">Back To Post</Link>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
          <div className="comments">
            {
              post.comments.map(comment => (
                <CommentItem key={comment._id} comment={comment} postId={post._id} />
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
};

Post.propTypes = {
  getSinglePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, {
  getSinglePost,
})(Post);
