import React from "react";
import "./Cards.scss";
import Card from "../Card/Card";
import { cardsData } from "data";

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="ParentContainer" key={id}>
            <Card
              title={card.title}
              value={card.value}
              barValue={card.barValue}
              color={card.color}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
