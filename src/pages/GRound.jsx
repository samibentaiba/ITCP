import React from "react";
import Landing from "../components/sections/codeEditor/elemnts/Landing.jsx";
import GameDay from "../components/sections/GameDay.jsx";
import Push from "../components/sections/Push.jsx"
const GRound = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "1440px",
        padding: "16px 64px",
        flexDirection:"column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <GameDay />
      <Landing />
      <Push />
    </div>
  );
};

export default GRound;
