import React from "react";
import "./postlist.css";
import Post from "../Post/Post";
export default function PostList() {
    return (
        <div className="post-list">
            <Post/>
            <Post/>
        </div>
   );
}