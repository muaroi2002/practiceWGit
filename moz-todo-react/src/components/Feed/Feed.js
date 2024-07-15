import React from 'react';
import Post from '../Post';
import '../Feed/Feed.css';

function Feed() {
  return (
    <div className="feed">
      <Post author="User1" content="Hello, this is my first post!" />
      <Post author="User2" content="React is awesome!" />
    </div>
  );
}

export default Feed;
