import React, { useState, useEffect } from "react";
import "./codeEditor/elemnts/ControlButtons.css";
import side from "../../assets/icons/side.svg";
import infoIcon from "../../assets/icons/infoicon.svg"; // Replace with the actual path to your info icon
import { LineWeight } from "@mui/icons-material";
import "./styles.css";
const Button = ({ onButtonClick }) => (
  <div className="button-container">
    <button className="control-button" onClick={onButtonClick}>
      <img src={side} alt="side" />
    </button>
  </div>
);

const Tooltip = ({ text }) => <div className="tooltip">{text}</div>;

const styles = {
  gameHUD: {
    display: "flex",
    width: "1440px",
    padding: "16px 64px",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "24px",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flex: "1 0 0",
  },
  text: {
    color: "var(--White, #FFF)",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "32px",
  },
  timeContainer: {
    display: "flex",
    padding: "8px 16px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    background: "var(--White-12, rgba(255, 255, 255, 0.12))",
  },
  dayText: {
    color: "var(--White, #FFF)",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "600",
    flex: "1 0 0",
    lineHeight: "32px",
  },
  infoIconContainer: {
    position: "relative",
    display: "inline-block",
  },
  tooltip: {
    position: "absolute",
    top: "-5rem",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "8px",
    borderRadius: "4px",
    whiteSpace: "nowrap",
    fontSize: "14px",
    zIndex: "10",
    visibility: "hidden",
    opacity: "0",
    transition: "opacity 0.3s ease",
    color: "var(--White, #FFF)",
    textAlign: "center",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "16px",
    display: "flex",
    width: "359px",
    flexDirection: "column",
    alignItems: "center",
    
  },
  tooltipVisible: {
    visibility: "visible",
    opacity: "1",
  },
};

const GameHUD = ({
  onButtonClick,
  showLanding,
  Title,
  InfoHUD,
  Time = { startTime: "2024-12-12T20:42:07Z", endTime: "2025-02-15T22:10:09Z" },
}) => {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const xEasy = 5;
  const xHard = 5;
  const xMedium = 5;
  const [showTooltip, setShowTooltip] = useState(false);
  useEffect(() => {
    const startTime = Time.startTime;
    const endTime = Time.endTime;
    //console.log(Time);
    const calculateTimeLeft = () => {
      const now = new Date();
      const endDate = new Date(endTime);

      if (now > endDate) {
        setTimeLeft({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const totalSeconds = Math.floor((endDate - now) / 1000);

      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      const remainingAfterDays = totalSeconds % (24 * 60 * 60);

      const hours = Math.floor(remainingAfterDays / (60 * 60));
      const remainingAfterHours = remainingAfterDays % (60 * 60);

      const minutes = Math.floor(remainingAfterHours / 60);
      const seconds = remainingAfterHours % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timerInterval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timerInterval);
  }, [Time.endTime]);
  const problemlevel = InfoHUD.level
    ? `${
        InfoHUD.level.charAt(0).toUpperCase() + InfoHUD.level.slice(1)
      } problems are worth x points. Their value is set by ITC Leadership and may change per game.`
    : undefined;

  const pointsinfo =
    problemlevel ||
    `Problems are worth different points: Easy (x points), Medium (x points), and Hard (x points). Point values are set by ITC Leadership and may vary by game.`;

    
  return (
    <div style={styles.gameHUD}>
      <div style={styles.buttonContainer}>
        {!showLanding && <Button onButtonClick={onButtonClick} />}
        <p style={styles.text}>
          {showLanding
            ? "Competitive Programming"
            : InfoHUD.title || "Problem title"}
        </p>{" "}
        <div style={styles.infoIconContainer}>
          <img
            src={infoIcon}
            alt="info"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            style={{ cursor: "pointer" }}
          />{" "}
          {showTooltip && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "-2px",
                alignSelf: "stretch",
              }}
            >
              <div style={{ ...styles.tooltip, ...styles.tooltipVisible }}>
                <p
                  style={{
                    width: "100%",
                    whiteSpace: "pre-wrap",
                    borderRadius: "4px",
                    background: "var(--White-12, rgba(255, 255, 255, 0.12))",
                    display: "flex",
                    padding: "12px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    color: "var(--White, #FFF)",
                    textAlign: "center",
                    fontFamily: "Inter",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "16px; /* 133.333% */</div",
                  }}
                >
                  {pointsinfo}
                </p>
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6L11.1962 0H0.803848L6 6Z"
                    fill="white"
                    fillOpacity="0.12"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={styles.timeContainer}>
        <p
          style={styles.text}
        >{`${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}</p>
      </div>

      <p style={styles.dayText}>{Title ? Title : 0}</p>
    </div>
  );
};

export default GameHUD;
