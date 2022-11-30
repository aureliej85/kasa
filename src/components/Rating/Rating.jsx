import React from "react";
import "./rating.scss"

export default function Rating({rating}){

const fullStar = Number(rating);
const emptyStar = 5 - fullStar;

    return(
        <div className="stars">
            {[...Array(fullStar)].map((e, i) => <img src="../full-star.png" key={i} />)}
            {[...Array(emptyStar)].map((e, j) => <img src="../empty-star.png" key={j} />)}
        </div>
    )
}