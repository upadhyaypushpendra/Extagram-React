import React from "react";
import "./footer.css";
import Link from "./../Link/Link"

export default function Footer({fontSize}){
    return (
        <footer>
            <nav>
                <Link text="ABOUT" fontSize={fontSize}/>
                <Link text="HELP" fontSize={fontSize}/>
                <Link text="API" fontSize={fontSize}/>
                <Link text="PRESS" fontSize={fontSize}/>
                <Link text="JOBS" fontSize={fontSize}/>
                <Link text="PRIVACY" fontSize={fontSize}/>
                <Link text="TERMS" fontSize={fontSize}/>
                <Link text="LOCATIONS" fontSize={fontSize}/>
                <Link text="TOP ACCOUNTS" fontSize={fontSize}/>
                <Link text="HASHTAGS" fontSize={fontSize}/>
                <Link text="LANGUAGE" fontSize={fontSize}/>
            </nav>
            <span>© 2020 Extagram From PU</span>
        </footer>
    );
}