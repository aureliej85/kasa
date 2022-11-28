import React from 'react';
import "./carrousel.scss"
import { useState } from 'react';
import { useEffect } from 'react';

export default function Carrousel({picTab}){

    const [currentIndex, setCurrentIndex] = useState(0);

   
    function handlePrevious(){
        return setCurrentIndex(currentIndex === picTab.length - 1 ? 0 : currentIndex + 1);
    }

    function handleNext(){
        return setCurrentIndex(currentIndex === 0 ? picTab.length - 1 : currentIndex - 1);
    }

    console.table(picTab);
   
     
    return (
        <div className="carrousel">
            
            { picTab.length >1 && (
            <button className="carrousel__previous" onClick={handlePrevious}>
            <img src="../arrow-back.png" /></button>
            )}
            
            {picTab.map((pic, index) => (

			<div key={index} className="carrousel__inner">

					{index == currentIndex && <img src={pic} />}
					{index == currentIndex && (
						<span className="carrousel__number">
							{currentIndex + 1}/{picTab.length}
						</span>
					)}

			</div>

			))}
         { picTab.length >1 && (
            <button className="carrousel__next" onClick={handleNext}>
            <img src="../arrow-forward.png" /></button>
            )}
        </div>
    )
}