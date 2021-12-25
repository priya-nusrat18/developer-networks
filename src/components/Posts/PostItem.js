import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { addLike, deletePost, removeLike } from "../../Redux/Actions/PostAction";

const PostItem = ({
    addLike ,
    removeLike , 
    deletePost,
    showActions , 
  post: { _id, likes, comments, date, text, name, avatar, user },
  auth,
}) => {
  return (
    <div className="post bg-white p-2 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on
          <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {showActions && (
          <>
          <button onClick={ e => addLike(_id)} type="button" className="btns btns-light">
          <i className="fas fa-thumbs-up"></i> { ' '}
          <span> {likes.length > 0 && <span>{likes.length}</span>} </span>
        </button>
        <button onClick={ e => removeLike(_id)} type="button" className="btns btns-light">
          <i className="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/posts/${_id}`} className="btns btns-primarys">
          Comment{" "}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button onClick={ e => deletePost(_id)}   type="button" className="btns btns-danger">
            <i className="fas fa-times"></i>
          </button>
        )}
        </>
        )}
        
      </div>
    </div>
  );
};
PostItem.defaultProps={
  showActions : true
}
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
    removeLike:PropTypes.func.isRequired,
    deletePost:PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {
    addLike,
    removeLike,
    deletePost
})(PostItem);
