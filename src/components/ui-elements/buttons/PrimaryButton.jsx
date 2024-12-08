import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import "./PrimaryButton.css";
import start from "../../../assets/images/start.svg";
import ReactLoading from "react-loading";

const PrimaryButton = ({
  txt,
  isfull = true,
  to = "",
  isicon = false,
  isexternal = false,
  onClick,
  redirectDelay = 1000,
  disabled = false, // Disabled state prop
  icon = "▶️", // Default icon if `isicon` is true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const path = to || location.pathname;
  const fullPath = path.startsWith("/") ? path : `/${path}`;

  const handleClick = (event) => {
    if (disabled) return; // Prevent click if disabled
    event.preventDefault();
    if (onClick) onClick(event);
    setIsClicked(true);
    setRedirecting(true);
  };

  useEffect(() => {
    if (redirecting) {
      const timeoutId = setTimeout(() => {
        if (isexternal) {
          window.open(path, "_blank", "noopener,noreferrer");
        } else {
          navigate(fullPath);
        }
        setIsClicked(false);
        setRedirecting(false);
      }, redirectDelay);

      return () => clearTimeout(timeoutId);
    }
  }, [redirecting, navigate, path, fullPath, isexternal, redirectDelay]);

  const buttonClasses = [
    "button",
    disabled && "button--disabled",
    isHovered && !disabled && "button--hovered",
    isPressed && !disabled && "button--pressed",
    isClicked && "button--clicked",
  ]
    .filter(Boolean)
    .join(" ");

  const buttonTextClasses = ["buttonText", isClicked && "buttonText--clicked"]
    .filter(Boolean)
    .join(" ");

  const buttonContent = (
    <button
      className={buttonClasses}
      style={isfull ? { width: "100%" } : { width: "auto" }}
      aria-label={txt}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseOut={() => setIsPressed(false)} // New event handler to cancel pressed state
      disabled={disabled}
    >
      <span className={buttonTextClasses}>
        {isClicked ? (
          <ReactLoading
            type="spin"
            color="#121212"
            height="24px"
            width="24px"
          />
        ) : (
          <span
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              flex: "1 0 0",
              alignSelf: "stretch",
            }}
          >
            {txt}
            {isicon ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 17.175V6.82499C8 6.54165 8.1 6.30399 8.3 6.11199C8.5 5.91999 8.73333 5.82432 9 5.82499C9.08333 5.82499 9.171 5.83732 9.263 5.86199C9.355 5.88665 9.44233 5.92432 9.525 5.97499L17.675 11.15C17.825 11.25 17.9377 11.375 18.013 11.525C18.0883 11.675 18.1257 11.8333 18.125 12C18.1243 12.1667 18.087 12.325 18.013 12.475C17.939 12.625 17.8263 12.75 17.675 12.85L9.525 18.025C9.44167 18.075 9.35433 18.1127 9.263 18.138C9.17167 18.1633 9.084 18.1757 9 18.175C8.73333 18.175 8.5 18.079 8.3 17.887C8.1 17.695 8 17.4577 8 17.175Z"
                  fill={disabled ? "#929292" : "#121212"}
                />
              </svg>
            ) : (
              "        "
            )}
          </span>
        )}
      </span>
    </button>
  );

  return (
    <div className={`linkWrapper ${isfull ? "full-width" : ""}`}>
      {buttonContent}
    </div>
  );
};

PrimaryButton.propTypes = {
  txt: PropTypes.string.isRequired,
  isfull: PropTypes.bool,
  to: PropTypes.string,
  isicon: PropTypes.bool,
  icon: PropTypes.node,
  isexternal: PropTypes.bool,
  onClick: PropTypes.func,
  redirectDelay: PropTypes.number,
  disabled: PropTypes.bool,
};

export default PrimaryButton;
