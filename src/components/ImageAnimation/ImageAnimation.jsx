import React from "react";
import './imageAnimation.css';
import image1 from './../../static/images/d6bf0c928b5a.jpg'
import image2 from './../../static/images/6f03eb85463c.jpg'
import image3 from './../../static/images/0a2d3016f375.jpg'
import image4 from './../../static/images/f0c687aa6ec2.jpg'
import image5 from './../../static/images/842fe5699220.jpg'
export  default function ImageAnimation() {
     return (
         <div id="animation-container">
             <div id="image-container">
                 <img  id="img1" src={image1} alt="" />
                     <img  id="img2" src={image2} alt="" />
                         <img id="img3" src={image3} alt="" />
                             <img  id="img4" src={image4} alt="" />
                                 <img id="img5" src={image5} alt="" />
             </div>
         </div>
     );
 };