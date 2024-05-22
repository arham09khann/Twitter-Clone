import React, { useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import { useEffect } from "react";
import FlipMove from "react-flip-move";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed___header">
        <h1>Home Page</h1>
        <TweetBox />
        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              image={post.image}
              avatar={post.avatar}
            />
          ))}
        </FlipMove>
        <Post
          displayName="Piyush Gupta"
          username="smarty_boy"
          verified="true"
          text="My favourte , Spunch!"
          image="../../spunch.gif"
          avatar=""
        />
      </div>
    </div>
  );
}

export default Feed;
