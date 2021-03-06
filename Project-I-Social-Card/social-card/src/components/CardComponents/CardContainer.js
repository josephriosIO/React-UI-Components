import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <section>
      <a href="https://reactjs.org/">
        <div className="card-content">
          <CardBanner />
          <CardContent />
        </div>
      </a>
    </section>
  );
};

export default CardContainer;
