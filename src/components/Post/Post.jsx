import React from "react";
import "./post.css";
import User from "../User/User";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import likedIcon from "./../../static/images/liked-icon.png";
import notLikedIcon from "./../../static/images/not-liked-icon.png";
import commentIcon from "./../../static/images/comment.png";
import chatIcon from "./../../static/images/chat-icon.png";
//import saveIcon from "./../../static/images/save-icon.png";
export default function Post() {
    return (
        <article className="post-container">
            <div className="post-wrapper">
                <header className="post-head">
                    <User profileSize={40} username={"pushpendra"} strokeWidth={2}/>
                    <div className="menu-icon">
                        <svg aria-label="More options" fill="#262626" height="16" viewBox="0 0 48 48" width="16">
                            <circle cx="8" cy="24" r="4.5" />
                            <circle cx="24" cy="24" r="4.5" />
                            <circle cx="40" cy="24" r="4.5"/>
                        </svg>
                    </div>
                </header>
                <button className="transparent-btn">
                    <div className="media-container">
                        <img src="https://images.unsplash.com/photo-1600604501256-d21146b17299?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
                    </div>
                </button>
                <div className="column">
                    <section className="row start">
                        <ButtonIcon iconSrc={likedIcon} altText={"Like"} />
                        <ButtonIcon iconSrc={commentIcon} altText={"Comment"} />
                        <ButtonIcon iconSrc={chatIcon} altText={"Chat"} />
                        <button className="row-end">Save</button>
                    </section>
                    <section><span>&nbsp;4&nbsp;</span>Likes</section>
                    <section className="comments-list">
                        <div className="comment-container">
                            <div className="comment-wrapper row">
                                <a href="#">username</a>
                                <p>Cool pic</p>
                            </div>
                        </div>
                        <section>1 DAY AGO</section>
                    </section>
                    <section className="add-comment-section">
                        <form className="row">
                            <textarea placeholder="Add a comment..." />
                            <button className="transparent-btn">Post</button>
                        </form>
                    </section>
                </div>
            </div>
        </article>
    );
}