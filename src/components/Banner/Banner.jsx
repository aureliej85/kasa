import React from 'react'
import "./banner.scss"


export default function Banner({texte, cover}){
    return(
        
        <div className="banner"> 
            <img className="banner__img" src={cover} />
            <span className="banner__title">{texte}</span>
        </div>
       
    )
}