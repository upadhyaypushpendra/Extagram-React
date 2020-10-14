import React from 'react';
import './home.css';
import Footer from "./../Footer/Footer";
import Header from "../Header/Header";
import Suggestions from "../Suggestions/Suggestions";
import Stories from "../Stories/Stories";
import PostList from "../PostList/PostList";

export default function Home() {
    return (
         <>
            <Header/>
            <div className="content">
                        <Stories/>
                        <PostList />
            </div>
            <div className="highlight">
                <Suggestions />
                <Footer fontSize="8px"/>
            </div>
        </>
    );
}