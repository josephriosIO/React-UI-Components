import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <section>
      <div className="card-content">
        <CardBanner />
        <CardContent />
      </div>
    </section>
  );
};

export default CardContainer;
