import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => {
  return (
    <header>
      <div className="top-content">
        <ImageThumbnail />
        <div className="header-content">
          <HeaderTitle />
          <HeaderContent />
        </div>
      </div>
    </header>
  );
};

export default HeaderContainer;
