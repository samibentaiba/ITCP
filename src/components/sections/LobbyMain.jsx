// LobbyMain.jsx
import React from "react";

const SlidingContent = (slider) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-white font-bold text-2xl mb-4">
          {slides[currentSlide].title}
        </h2>
        <p className="text-gray-300 mb-6">{slides[currentSlide].content}</p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handlePrevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="text-white font-bold text-2xl">
            {currentSlide + 1}
          </div>
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleNextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "32px 64px",
    display: "flex",
    gap: 24,
  },
  gameRulesSection: {
    width: 644,
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
    alignItems: "flex-start",
    gap: "0.5rem",
    alignSelf: "stretch",
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
    flex: "1 0 0",
  },
  ruleHeading: {
    alignSelf: "stretch",
    color: "var(--White, #FFF)",
    fontFamily: "Inter",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2rem",
  },
  ruleDescription: {
    color: "var(--Muted-Gray, #E7E7E7)",
    fontFamily: "Inter",
    fontSize: "1rem",
    Weight: "500",
    lineHeight: "1.5rem; ",
  },
  joinedPlayersSection: {
    flex: 1,
    padding: 24,
    display: "flex",
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
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.5rem",
    alignSelf: "stretch",
    width: "100%", // Ensures full horizontal width
    flex: "1 1 1 1", // Ensures flexibility and full width
  },
  playerRow: {
    display: "flex",
    gap: 24,
    width: "100%", // Ensures full horizontal width
    flex: "1 1 100%", // Ensures flexibility and full width
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

  playerCard: (isCurrent) => ({
    width: "100%", // This ensures full horizontal width
    flex: "1 1 100%", // Added flex-grow, flex-shrink, and basis to ensure stretching
    background: isCurrent ? "#414141" : "rgba(255, 255, 255, 0.12)",
    border: isCurrent ? "2px solid white" : "none",
    display: "flex",
    padding: "0.75rem ",
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

const LobbyMain = () => {
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
                <p style={styles.ruleDescription}>{rule.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Joined Players Section */}
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
          {Array.from({ length: Math.ceil(players.length / 3) }).map(
            (_, rowIndex) => (
              <div key={rowIndex} style={styles.playerRow}>
                {players
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map((player, playerIndex) => (
                    <div
                      key={playerIndex}
                      style={styles.playerCard(player.isCurrent)}
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
            )
          )}
        </div>
      </div>
    </div>
  );
};

const rules = [
  {
    title: "Solve and navigate problems strategically",
    description:
      "At the start of the game, select any problem from the problem list to begin working on it in the problem workspace. Focus on solving as many problems as possible to maximize your score.",
  },
  {
    title: "Timed gameplay",
    description:
      "Each game is limited to 60 minutes. Use your time wisely to navigate and solve problems effectively.",
  },
  {
    title: "Work in the problem workspace",
    description:
      "For each selected problem, use the problem workspace to write and test your solution. You can save solutions and check their accuracy before final submission.",
  },
  {
    title: "Submit before time runs out",
    description:
      "Ensure all solutions are submitted before the timer expires. Late submissions will not be accepted.",
  },
  {
    title: "Leaderboard rankings",
    description:
      "Your rank is based on the number of correct solutions and your completion time. Aim for accuracy and efficiency to climb the leaderboard.",
  },
  {
    title: "Crown the winners",
    description:
      "Day 2 concludes with the top 3 participants earning the winning spots. Compete with skill and determination to secure your place.",
  },
  {
    title: "Fair play required",
    description:
      "Using unauthorized tools, sharing answers, or engaging in any form of cheating will lead to disqualification. Compete honestly to uphold the game’s integrity.",
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
    username: "Ayoub",
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
];

export default LobbyMain;
