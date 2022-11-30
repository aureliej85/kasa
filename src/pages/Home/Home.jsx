import React, { useState } from "react";
import { useEffect } from "react";
import { json } from "react-router-dom";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import "./home.scss"

export default function Home() {
  let textBanner = "Chez vous, partout et ailleurs";
  const [allKasas, setAllKasas] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then((dataResponse) => {
        console.log(dataResponse);
        setAllKasas(dataResponse);
      })
      .catch(function (err) {
        console.log("Une erreur est survenue: " + err);
      });
  }, []);

  return (
    <main>
        <Banner texte={textBanner} cover="/bannerHome.jpg" size={"small"}/>
        <div className="cards">
          {allKasas.map((elt) => <Card key={elt.id} title={elt.title} cover={elt.cover} id={elt.id}/>)}     
        </div>
    </main>
  );
}
