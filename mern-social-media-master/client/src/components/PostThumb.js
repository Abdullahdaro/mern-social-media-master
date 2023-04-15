import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PostThumb = ({ posts, result }) => {
  const { theme } = useSelector((state) => state);

  if (result === 0 ){
    return <h2 className="text-center color-c1">No Post</h2>
  }

    const imageShow = (src) => {
      return (
        <img
          src={src}
          alt={src}
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
        />
      );
    };

    return (
      <div className="post_thumb">
        {posts && posts.map((post) => (
          <Link to={`/post/${post._id}`} key={post._id}>
            <div className="post_thumb_display">
                {imageShow(post.images[0].url, theme)}
            </div>
          </Link>
        ))}
      </div>
    );
};

export default PostThumb
