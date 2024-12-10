import React from "react";
import "./codeEditor/elemnts/ControlButtons.css"
import side from "../../assets/icons/side.svg"
const ControlButtons = () => {
  return (
    <div className="button-container">
      <button  className="control-button">
        <img src={side} alt="side" />
      </button>
    </div>
  );
};

function GameDay() {
  return (
    <div
      style={{
        display: "flex",
        width: "1440px",
        padding: "16px 64px",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "24px"
      }}
    >
      <div
        style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flex: "1 0 0",
        }}
      >
<ControlButtons />
        <p
          style={{
            color: "var(--White, #FFF)",
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "32px",
          }}
        >
          Problem title
        </p>
      </div>
      <div
        style={{
          display: "flex",
          padding: "8px 16px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50px",
          background: "var(--White-12, rgba(255, 255, 255, 0.12))",
        }}
      >
        <p
          style={{
            color: "var(--White, #FFF)",
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "32px",
          }}
        >
          00:00
        </p>
      </div>
      <p
        style={{
          color: "var(--White, #FFF)",
          textAlign: "right",
          fontFamily: "Inter",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "600",
          flex: "1 0 0",
          lineHeight: "32px; ",
        }}
      >
        Day 1
      </p>
    </div>
  );
}
export default GameDay;
