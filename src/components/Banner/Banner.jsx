import React from 'react'
import "./banner.scss"


export default function Banner({texte, cover, size}){
    
    return(
        
        <div className={"banner__" + size}> 
            
            <img className={"banner__"+size+"__img__" + size} src={cover} />
            <span className={"banner__"+size+"__title__" +size}>{texte}</span>
   
        </div>
       
    )
}