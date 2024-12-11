import React from "react";
import PrimaryButton from "../ui-elements/buttons/PrimaryButton"; // Importing a reusable primary button component
import SecondaryButton from "../ui-elements/buttons/SecondaryButton"; // Importing a reusable secondary button component
import greencheck from "../../assets/icons/greencheck.svg"; // Importing the green check icon
import warning from "../../assets/icons/warning.svg"; // Importing the warning icon
import error from "../../assets/icons/error.svg"; // Importing the error icon

// Component for rendering the buttons
function Thebuttons() {
  // Inline styling for the button container
  const ButtonsStyle = {
    display: "flex", // Arrange buttons in a horizontal row
    width: "100%", // Set container to full width
    justifyContent: "flex-end", // Align buttons to the right
    alignItems: "center", // Vertically align items to the center
    gap: "16px", // Add space between buttons
    alignSelf: "stretch", // Allow the container to stretch in its parent
  };

  return (
    <div style={ButtonsStyle}>
      {/* Render a secondary button with specific props */}
      <SecondaryButton
        txt="Start game" // Button text
        to="game-round" // Link or action target
        isfull={false} // Controls full-width styling
        type="submit" // HTML button type
        isicon // Indicates if the button includes an icon
      />

      {/* Render a primary button with specific props */}
      <PrimaryButton
        txt="Start game" // Button text
        to="game-round" // Link or action target
        type="submit" // HTML button type
        isfull={false} // Controls full-width styling
        isicon // Indicates if the button includes an icon
      />
    </div>
  );
}

// Component for displaying accuracy with a corresponding icon and text
function Accuracy({ value }) {
  // Inline styling for the accuracy container
  const AccuracyStyle = {
    display: "flex", // Arrange icon and text in a horizontal row
    gap: "8px", // Add space between icon and text
    alignItems: "center", // Vertically align items to the center
    width: "100%", // Set container to full width
  };

  // Function to return dynamic text styles based on accuracy value
  const TextStyle = (value) => ({
    color:
      value >= 80
        ? "var(--Green, #32D74B)" // Green color for high accuracy
        : value >= 40
        ? "var(--Yellow, #FFD60A)" // Yellow color for medium accuracy
        : "var(--Red, #FF3B30)", // Red color for low accuracy
    fontFamily: "Inter", // Set the font
    fontSize: "14px", // Set the font size
    fontWeight: "400", // Set the font weight
    lineHeight: "20px", // Set the line height
  });

  // Determine which icon to use based on the accuracy value
  const icon = value >= 80 ? greencheck : value >= 40 ? warning : error;

  return (
    <div style={AccuracyStyle}>
      <img src={icon} alt="Accuracy icon" />{" "}
      {/* Display the corresponding icon */}
      <p style={TextStyle(value)}>Accuracy: {value}%</p>{" "}
      {/* Display accuracy text */}
    </div>
  );
}

// Component for rendering the entire Push section
function Push({ value = 80 }) {
  // Inline styling for the Push container
  const PushStyles = {
    display: "flex", // Arrange child components in a horizontal row
    width: "90rem", // Set the container width
    padding: "2rem 4rem", // Add padding inside the container
    justifyContent: "space-between", // Space out child components evenly
    alignItems: "center", // Vertically align items to the center
  };

  return (
    <div style={PushStyles}>
      {/* Render the Accuracy component and pass the value as a prop */}
      <Accuracy value={value} />
      {/* Render the Thebuttons component */}
      <Thebuttons />
    </div>
  );
}

export default Push; // Export the Push component as default
