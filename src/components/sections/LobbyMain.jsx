// LobbyMain.jsx
import { Minimize } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

function sliceArray(arr, size = 12) {
  const result = [];
  let i = 0;

  while (i < arr.length) {
    if (arr.length - i <= size) {
      // If the remaining elements are less than or equal to 'size', push the rest as the last chunk
      result.push(arr.slice(i));
      break;
    } else {
      // Otherwise, push a chunk of 'size'
      result.push(arr.slice(i, i + size));
    }
    i += size;
  }

  return result;
}

const Pagination = ({ page, onPrevClick, onNextClick, totalPages }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <button
        onClick={onPrevClick}
        disabled={page === 1}
        style={{
          width: 32,
          height: 32,
          opacity: page === 1 ? 0 : "",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //display: page === 1 ? "none":"inline-flex",
          display: "inline-flex",
          borderRadius: "50px",
          background: "var(--White-12, rgba(255, 255, 255, 0.12))",
          border: "none",
        }}
      >
        <div
          style={{
            borderRadius: 50,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              padding: 4,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.825 13H19C19.2833 13 19.5207 12.904 19.712 12.712C19.9033 12.52 19.9993 12.2827 20 12C20.0007 11.7174 19.9047 11.48 19.712 11.288C19.5193 11.096 19.282 11 19 11H7.825L12.725 6.10004C12.925 5.90004 13.021 5.6667 13.013 5.40004C13.005 5.13337 12.9007 4.90004 12.7 4.70004C12.5 4.5167 12.2667 4.4207 12 4.41204C11.7333 4.40337 11.5 4.49937 11.3 4.70004L4.7 11.3C4.6 11.4 4.529 11.5084 4.487 11.625C4.445 11.7417 4.42433 11.8667 4.425 12C4.42566 12.1334 4.44633 12.2584 4.487 12.375C4.52766 12.4917 4.59866 12.6 4.7 12.7L11.3 19.3C11.4833 19.4834 11.7123 19.575 11.987 19.575C12.2617 19.575 12.4993 19.4834 12.7 19.3C12.9 19.1 13 18.8627 13 18.588C13 18.3134 12.9 18.0757 12.7 17.875L7.825 13Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <p
            key={index}
            style={{
              color:
                page == index + 1
                  ? "var(--White, #FFF)"
                  : " var(--Light-Gray, #929292)",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "24px",
            }}
          >
            {index + 1}
          </p>
        ))}
      </div>

      <button
        onClick={onNextClick}
        disabled={page === totalPages}
        style={{
          width: 32,
          height: 32,
          opacity: page === totalPages ? 0 : "",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //display: page === totalPages ? "none":"inline-flex",
          display: "inline-flex",
          borderRadius: "50px",
          background: "var(--White-12, rgba(255, 255, 255, 0.12))",
          border: "none",
        }}
      >
        <div
          style={{
            borderRadius: 50,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              padding: 4,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.175 13H5C4.71667 13 4.47934 12.904 4.288 12.712C4.09667 12.52 4.00067 12.2827 4 12C3.99934 11.7174 4.09534 11.48 4.288 11.288C4.48067 11.096 4.718 11 5 11H16.175L11.275 6.10004C11.075 5.90004 10.979 5.6667 10.987 5.40004C10.995 5.13337 11.0993 4.90004 11.3 4.70004C11.5 4.5167 11.7333 4.4207 12 4.41204C12.2667 4.40337 12.5 4.49937 12.7 4.70004L19.3 11.3C19.4 11.4 19.471 11.5084 19.513 11.625C19.555 11.7417 19.5757 11.8667 19.575 12C19.5743 12.1334 19.5537 12.2584 19.513 12.375C19.4723 12.4917 19.4013 12.6 19.3 12.7L12.7 19.3C12.5167 19.4834 12.2877 19.575 12.013 19.575C11.7383 19.575 11.5007 19.4834 11.3 19.3C11.1 19.1 11 18.8627 11 18.588C11 18.3134 11.1 18.0757 11.3 17.875L16.175 13Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
};

const LobbyMain = () => {
  const [page, setPage] = useState(1);
  const [playersChunks, setPlayersChunks] = useState(() => sliceArray(players));

  const totalPages = playersChunks.length;

  const handlePrevClick = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextClick = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Use a separate useEffect to update playersChunks when the page changes
  useEffect(() => {
    const chunks = sliceArray(players);
    setPlayersChunks(chunks);
  }, []); // This runs only once on initial render

  // Another useEffect to handle page-specific updates
  useEffect(() => {
    console.log("Current page:", page);
  }, [page]);
  return (
    <div style={styles.container}>
      {/* Game Rules Section */}
      <div style={styles.gameRulesSection}>
        <h2 style={styles.rulesTitle}>Game rules</h2>
        <div style={styles.rulesContainer}>
          {rules.map((rule, index) => (
            <div key={index} style={styles.ruleItem}>
              <div style={styles.ruleIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1332 18.4L11.2665 15.5334C11.0221 15.2889 10.711 15.1667 10.3332 15.1667C9.95539 15.1667 9.64428 15.2889 9.39984 15.5334C9.1554 15.7778 9.03317 16.0889 9.03317 16.4667C9.03317 16.8445 9.1554 17.1556 9.39984 17.4L13.1998 21.2C13.4665 21.4667 13.7776 21.6 14.1332 21.6C14.4887 21.6 14.7998 21.4667 15.0665 21.2L22.5998 13.6667C22.8443 13.4222 22.9665 13.1111 22.9665 12.7334C22.9665 12.3556 22.8443 12.0445 22.5998 11.8C22.3554 11.5556 22.0443 11.4334 21.6665 11.4334C21.2887 11.4334 20.9776 11.5556 20.7332 11.8L14.1332 18.4ZM15.9998 29.3334C14.1554 29.3334 12.4221 28.9831 10.7998 28.2827C9.17762 27.5822 7.76651 26.6325 6.56651 25.4334C5.36651 24.2342 4.41673 22.8231 3.71717 21.2C3.01762 19.5769 2.66739 17.8436 2.66651 16C2.66562 14.1565 3.01584 12.4231 3.71717 10.8C4.41851 9.17691 5.36828 7.7658 6.56651 6.56669C7.76473 5.36758 9.17584 4.4178 10.7998 3.71735C12.4238 3.01691 14.1572 2.66669 15.9998 2.66669C17.8425 2.66669 19.5758 3.01691 21.1998 3.71735C22.8238 4.4178 24.235 5.36758 25.4332 6.56669C26.6314 7.7658 27.5816 9.17691 28.2838 10.8C28.9861 12.4231 29.3358 14.1565 29.3332 16C29.3305 17.8436 28.9803 19.5769 28.2825 21.2C27.5847 22.8231 26.635 24.2342 25.4332 25.4334C24.2314 26.6325 22.8203 27.5827 21.1998 28.284C19.5794 28.9854 17.8461 29.3351 15.9998 29.3334Z"
                    fill="#0A84FF"
                  />
                </svg>
              </div>
              <div style={styles.ruleContent}>
                <h3 style={styles.ruleHeading}>{rule.title}</h3>
                <p
                  style={{ ...styles.ruleDescription, whiteSpace: "pre-line" }}
                >
                  {rule.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.joinedPlayersSection}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h2 style={styles.playersTitle}>Joined players</h2>
          <p style={styles.waitingMessage}>Waiting for players to join...</p>
        </div>
        <div style={styles.playersContainer}>
          {playersChunks[page - 1]?.map((player, index) => (
            <div
              key={index}
              style={styles.playerCardIsCurrentMultip(player.isCurrent)}
            >
              <img
                src={player.avatar}
                alt={player.username}
                style={styles.playerAvatar}
              />
              <div style={styles.playerUsername}>{player.username}</div>
              <div style={styles.playerStatus(player.isReady)}>
                {player.isReady ? "Ready" : player.status}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 ? (
          <Pagination
            page={page}
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
            totalPages={totalPages}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    padding: "32px 64px 64px 64px",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "24px",
  },

  gameRulesSection: {
    padding: 24,
    background: "#414141",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
  rulesTitle: {
    color: "var(--White, #FFF)",
    fontFamily: "Inter",
    fontSize: "2rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "2.5rem",
  },
  rulesContainer: {
    display: "flex",
    flexDirection: "column",

    gap: 24,
  },
  ruleItem: {
    display: "flex",
    gap: "0.5rem",
  },
  ruleIcon: {
    width: 32,
    height: 32,
    position: "relative",
  },
  ruleContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
  ruleHeading: {
    color: "var(--White, #FFF)",
    fontFamily: "Inter",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2rem",
  },
  ruleDescription: {
    fontSize: "1rem",
    fontStyle: "normal",
    color: "var(--Muted-Gray, #E7E7E7)",
    fontFamily: "Inter",
    fontWeight: "500", // Corrected from "Weight" to "fontWeight"
    lineHeight: "1.5rem",
  },
  joinedPlayersSection: {
    padding: 24,
    display: "flex",
    width : "41%",
    flexDirection: "column",
    gap: 32,
    alignItems: "center",
  },
  playersTitle: {
    color: "var(--White, #FFF)",
    fontFamily: "Inter",
    fontSize: "2rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "2.5rem",
    alignSelf: "stretch",
  },
  playersContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gridRowGap: 24,
    gridColumnGap: 24,
    width: "100%", // Ensures full horizontal width
  },
  playerRow: {
    display: "flex",
    gap: 24,
  },
  waitingMessage: {
    color: "var(--Light-Gray, #929292)",
    fontFamily: "Inter",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.5rem",
    textAlign: "end",
  },
  playerCardIsCurrentMultip: (isCurrent) => ({
    flex: "1 1 100%", // Added flex-grow, flex-shrink, and basis to ensure stretching
    background: isCurrent ? "#414141" : "rgba(255, 255, 255, 0.12)",
    border: isCurrent ? "2px solid white" : "none",
    display: "flex",
    padding: "0.75rem 0rem",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    alignSelf: "stretch",
    borderRadius: "0.5rem",
  }),
  playerAvatar: {
    width: "6rem",
    height: "6rem",
    borderRadius: "50%",
    backgroundColor: "lightgray",
    backgroundImage: "url(https://via.placeholder.com/96x96)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  playerUsername: {
    color: "var(--Muted-Gray, #E7E7E7)",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.5rem",
  },
  playerStatus: (isReady) => ({
    alignSelf: "stretch",
    color: isReady ? "var(--Green, #32D74B)" : "var(--White, #FFF)",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.25rem",
  }),
};
const rules = [
  {
    title: "Solve and navigate problems strategically",
    description: `At the start of the game, select any problem from the problem list to\nbegin working on it in the problem workspace. Focus on solving as many\nproblems as possible to maximize your score.`,
  },
  {
    title: "Timed gameplay",
    description: `Each game is limited to 60 minutes. Use your time wisely to navigate and\nsolve problems effectively.`,
  },
  {
    title: "Work in the problem workspace",
    description: `For each selected problem, use the problem workspace to write and test\nyour solution. You can save solutions and check their accuracy before\nfinal submission.`,
  },
  {
    title: "Submit before time runs out",
    description: `Ensure all solutions are submitted before the timer expires.\nLate submissions will not be accepted.`,
  },
  {
    title: "Leaderboard rankings",
    description: `Your rank is based on the number of correct solutions and your\ncompletion time. Aim for accuracy and efficiency to climb the\nleaderboard.`,
  },
  {
    title: "Crown the winners",
    description: `At the end of Day 1, the top 20 participants qualify for Day 2. Make every\nproblem count!`,
  },
  {
    title: "Fair play required",
    description: `Using unauthorized tools, sharing answers, or engaging in any form of\ncheating will lead to disqualification. Compete honestly to uphold the\ngame’s integrity.`,
  },
];
const players = [
  {
    avatar: "https://via.placeholder.com/96x96",
    username: `Louai`,
    status: "Joining...",
    isReady: false,
    isCurrent: false,
  },

  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mohamed",
    status: "Joining...",
    isReady: true,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Sami",
    status: "You",
    isReady: false,
    isCurrent: true,
  },

  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Maria",
    status: "Ready",
    isReady: true,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },

  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },

  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
  {
    avatar: "https://via.placeholder.com/96x96",
    username: "Mahdi",
    status: "You",
    isReady: false,
    isCurrent: false,
  },
];

export default LobbyMain;
