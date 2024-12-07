// Navbar.jsx
import React from "react";
import PrimaryButton from "../ui-elements/buttons/PrimaryButton";
import { Title } from "@mui/icons-material";
const LobbyHeader = () => {
  const container = {
    display: "flex",
    width: "90rem",
    padding: "2rem 4rem",
    flexDirection: "column",
    alignItems: "center",
  };
  const middlesection = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  };
  const buttons = {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  };
  const usernamestyle = {
    color: "var(--White, #FFF)",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.5rem",
    listStyle: "none",
  };
  const logoutstyle = {
    display: "flex",
    padding: "0.5rem 0.75rem",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  };
  const TheDayNumber = 1;
  const TheMinutes = "05";
  const TheSeconds = "00";
  return (
    <div style={container}>
      <div style={middlesection}>
        <div
          style={{
            color: "var(--White, #FFFFFF)",
            fontFamily: "Inter",
            fontSize: "48px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "60px",
          }}
        >
          Day {TheDayNumber} lobby
        </div>
        <PrimaryButton
          txt="Start game"
          full
          to="game-round"
          type="submit"
          isicon
        />
        <body
          style={{
            color: "var(--White, #FFF)",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "1.5rem; /* 150% *",
          }}
        >
          Game starts in: {TheMinutes}:{TheSeconds}
        </body>
      </div>
    </div>
  );
};

export default LobbyHeader;
