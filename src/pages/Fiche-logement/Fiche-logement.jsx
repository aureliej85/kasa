import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import Tag from "../../components/Tag/Tag";
import "./fiche-logement.scss";

export default function HomeDetails() {
  const idKasa = useParams();
  console.log(idKasa);
  const [detailKasa, setDetailKasa] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetch("/logements.json")
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then((dataResponse) => {
        console.log(dataResponse);
        let kasa = dataResponse.find((elt) => elt.id === idKasa.id);
        kasa ? setDetailKasa(kasa) : navigation("/error");
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
    <Fragment>
      {detailKasa.pictures && (
        <div className="hosts">
          <Carrousel picTab={detailKasa.pictures} />

          <section className="top0">
            <div className="top1">
              <div className="top1__title">
                {detailKasa.title}
                <span> {detailKasa.location}</span>
              </div>
              <div className="top1__tags">
                <Tag tags={detailKasa.tags} />
              </div>
            </div>

            <div className="top2">
              <div className="top2__host">
                <span className="top2__host__name">{detailKasa.host.name}</span>
                <span>
                  <img src={detailKasa.host.picture} />
                </span>
              </div>
              <div className="top2__review">
                <Rating rating={detailKasa.rating} />
              </div>
            </div>
          </section>

          <div className="collapseDiv">
            <span className="collapseDiv__span">
              <Collapse
                title={"Description"}
                contentText={detailKasa.description}
              />
            </span>
            <span className="collapseDiv__span">
              <Collapse
                title={"Equipements"}
                contentText={detailKasa.equipments.map((elt) => (
                  <li>{elt}</li>
                ))}
              />
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
}
