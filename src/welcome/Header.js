import React from "react";

const Title = {
  background: "#333",
  textAlign: "center",
  color: "#ffffff",
  padding: "10px",
};

const Header = () => {
  return (
    <>
      <div style={Title}>
        <h1>
          <b>Covid-19 Tracker App</b>
        </h1>
      </div>
    </>
  );
};

export default Header;