import React, { useState } from "react";
import Landing from "../components/sections/codeEditor/elemnts/Landing.jsx";
import GameDay from "../components/sections/GameDay.jsx";
import ProblemSection from "../components/sections/ProblemSection.jsx";
import Push from "../components/sections/Push.jsx";

const GRound = () => {
  const [showLanding, setShowLanding] = useState(true);

  // Function to toggle between Landing and ProblemSection
  const handleButtonClick = () => {
    setShowLanding((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "1440px",
        padding: "16px 64px",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <GameDay onButtonClick={handleButtonClick} />
      {showLanding ? <Landing /> : <ProblemSection />}
      {showLanding ? <Push /> : ""}
    </div>
  );
};

export default GRound;
