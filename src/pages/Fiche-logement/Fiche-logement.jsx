import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import Tag from "../../components/Tag/Tag";
import "./fiche-logement.scss";

export default function HomeDetails(){
const idKasa = useParams()
console.log(idKasa)
const [detailKasa, setDetailKasa] = useState([]);

useEffect(() => {
  fetch("/logements.json")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then((dataResponse) => {
      console.log(dataResponse);
      let kasa = dataResponse.find((elt) => elt.id === idKasa.id );
      setDetailKasa(kasa);
    })
    .catch(function (err) {
      console.log("Une erreur est survenue: " + err);
    });
}, []);

//let picTab = detailKasa.pictures.map((elt) => console.log("picTab " + elt));
console.table(detailKasa.pictures);
let picTab = detailKasa.pictures;

console.table(detailKasa.equipments);



return (
  detailKasa.pictures && (
    <div >
      <Carrousel picTab={detailKasa.pictures}/> 

      <div className="top">
        <div className="top__title">
          {detailKasa.title }  
        </div>
        <div className="top__host">
          <span className="top__host__name">{detailKasa.host.name}</span>
          <span><img src={detailKasa.host.picture} /></span>
        </div>
      </div>

      <div className="location">
        {detailKasa.location}
      </div>

      <div className="meta">
        <div className="meta__tag">  
          <Tag tags={detailKasa.tags}/> 
        </div>
        <div className="meta__review">
          <Rating rating={detailKasa.rating}/>
        </div>
      </div>

      <div className="collapseDiv">
        <span className="collapseDiv__span">
          <Collapse title={"Description"} contentText={detailKasa.description} />
        </span>
        <span className="collapseDiv__span">
          <Collapse title={"Equipements"} contentText={detailKasa.equipments.map((elt)=> <li>{elt}</li>) }/>
        </span>
      </div>

    </div>
    
  )

);
}