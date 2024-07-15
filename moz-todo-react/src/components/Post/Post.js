import React from 'react';
import '../Post/Post.css';

function Post({ author, content }) {
  return (
    <div className="post">
      <h3>{author}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Post;
