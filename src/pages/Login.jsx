import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, loginUser } from "../../redux/login/action";
import { useNavigate } from "react-router-dom";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import InputField from "../components/ui-elements/input/InputField";
import PrimaryButton from "../components/ui-elements/buttons/PrimaryButton.jsx";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = useSignIn();
  // Local state for form fields
  const [localEmail, setLocalEmail] = useState("");
  const [localPassword, setLocalPassword] = useState("");
  // Accessing Redux state for leading and errors handling
  const { isLoading, error } = useSelector((state) => state.login);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = dispatch(
      loginUser({ email: localEmail, password: localPassword })
    );
    /* const result = await dispatch(
      loginUser({ email: localEmail, password: localPassword })
    ); */
    if (result.error) console.error("Login failed:", result.error);
    else {
      const { token, userState } = result;
      const success = signIn({
        token,
        auth: { token, type: "bearer" },
        userState,
        expresIn: 3600,
      });
      if (success) {
        dispatch(setEmail(userState.email));
        dispatch(setPassword(localPassword));
        navigate("/dashboard");
      } else console.log("Sign-in Failed");
    }
  };
  const Caption = "By joining, you agree to ITCP's Privacy Policy.";
  return (
    <div
      style={{
        display: "flex",
        width: "37.5rem",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          alignSelf: "stretch",
        }}
      ></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="48"
        viewBox="0 0 60 48"
        fill="none"
      >
        <path
          d="M24.6723 7.92236V10.6042H14.0132V0L24.6723 7.92236Z"
          fill="white"
        />
        <path
          d="M59.3547 23.9725H24.6725V48H14.0156V23.9725H0.64502V19.3868C0.64502 17.776 1.28489 16.2312 2.42386 15.0923C3.56283 13.9533 5.10761 13.3134 6.71836 13.3134H48.6659L59.3547 23.9725Z"
          fill="white"
        />
        <path
          d="M59.3549 37.3409L48.6661 47.9978H33.2334C32.4648 47.998 31.7037 47.8467 30.9935 47.5526C30.2834 47.2585 29.6382 46.8275 29.0947 46.284C28.5512 45.7405 28.1201 45.0953 27.8261 44.3851C27.532 43.675 27.3807 42.9139 27.3809 42.1453V26.6818H38.0378V37.3387L59.3549 37.3409Z"
          fill="white"
        />
        <path
          d="M6.7186 48H11.3044V26.6862H0.647461V41.9267C0.647461 43.537 1.28703 45.0815 2.42552 46.2204C3.56402 47.3593 5.10823 47.9994 6.7186 48Z"
          fill="white"
        />
      </svg>
      <p
        style={{
          color: "var(--White, #FFF)",
          textAlign: "center",
          fontFamily: "Inter",
          fontSize: "2rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "2.5rem",
        }}
      >
        Competitive Programming
      </p>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1.5rem",
          alignSelf: "stretch",
        }}
        onSubmit={handleSubmit}
      >
        {/*input field for email  */}
        <InputField
          placeholder="Enter username"
          value={localEmail}
          onChange={(e) => setLocalEmail(e.target.value)}
        />
        {/*input field for password  */}
        <InputField
          placeholder="Enter password"
          value={localPassword}
          isPassword
          onChange={(e) => setLocalPassword(e.target.value)}
        />
        {/*Display errors if exists  */}
        {error && <p style={{ color: "red" }}> {error}</p>}
        {/*show loading or submit butto */}
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <PrimaryButton txt="Join" full to="lobby" type="submit" isicon = {false}/>
        )}
        
        <caption
          style={{
            color: "var(--Light-Gray, #929292)",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: "0.875rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.25rem",
            alignSelf: "stretch",
          }}
        >
          {Caption}
        </caption>
      </form>
    </div>
  );
};

export default Login;
<div className="RulesCard" style={{width: 644, height: 976, padding: 24, background: '#414141', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
  <div className="GameRules" style={{alignSelf: 'stretch', color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Game rules</div>
  <div className="Frame" style={{alignSelf: 'stretch', height: 856, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
    <div className="Frame" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
      <div className="CheckCircleRounded" style={{width: 32, height: 32, position: 'relative'}}>
        <div className="Vector" style={{width: 26.67, height: 26.67, left: 2.67, top: 2.67, position: 'absolute', background: '#0A84FF'}}></div>
      </div>
      <div className="Frame" style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
        <div className="SolveAndNavigateProblemsStrategically" style={{alignSelf: 'stretch', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Solve and navigate problems strategically</div>
        <div className="AtTheStartOfTheGameSelectAnyProblemFromTheProblemListToBeginWorkingOnItInTheProblemWorkspaceFocusOnSolvingAsManyProblemsAsPossibleToMaximizeYourScore" style={{alignSelf: 'stretch', color: '#E7E7E7', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>At the start of the game, select any problem from the problem list to begin working on it in the problem workspace. Focus on solving as many problems as possible to maximize your score.</div>
      </div>
    </div>
    <div className="Frame" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
      <div className="CheckCircleRounded" style={{width: 32, height: 32, position: 'relative'}}>
        <div className="Vector" style={{width: 26.67, height: 26.67, left: 2.67, top: 2.67, position: 'absolute', background: '#0A84FF'}}></div>
      </div>
      <div className="Frame" style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
        <div className="TimedGameplay" style={{alignSelf: 'stretch', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Timed gameplay</div>
        <div className="EachGameIsLimitedTo60MinutesUseYourTimeWiselyToNavigateAndSolveProblemsEffectively" style={{alignSelf: 'stretch', color: '#E7E7E7', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Each game is limited to 60 minutes. Use your time wisely to navigate and solve problems effectively.</div>
      </div>
    </div>
    <div className="Frame" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
      <div className="CheckCircleRounded" style={{width: 32, height: 32, position: 'relative'}}>
        <div className="Vector" style={{width: 26.67, height: 26.67, left: 2.67, top: 2.67, position: 'absolute', background: '#0A84FF'}}></div>
      </div>
      <div className="Frame" style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
        <div className="WorkInTheProblemWorkspace" style={{alignSelf: 'stretch', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Work in the problem workspace</div>
        <div className="ForEachSelectedProblemUseTheProblemWorkspaceToWriteAndTestYourSolutionYouCanSaveSolutionsAndCheckTheirAccuracyBeforeFinalSubmission" style={{alignSelf: 'stretch', color: '#E7E7E7', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>For each selected problem, use the problem workspace to write and test your solution. You can save solutions and check their accuracy before final submission.</div>
      </div>
    </div>
    <div className="Frame" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
      <div className="CheckCircleRounded" style={{width: 32, height: 32, position: 'relative'}}>
        <div className="Vector" style={{width: 26.67, height: 26.67, left: 2.67, top: 2.67, position: 'absolute', background: '#0A84FF'}}></div>
      </div>
      <div className="Frame" style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
        <div className="SubmitBeforeTimeRunsOut" style={{alignSelf: 'stretch', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Submit before time runs out</div>
        <div className="EnsureAllSolutionsAreSubmittedBeforeTheTimerExpiresLateSubmissionsWillNotBeAccepted" style={{alignSelf: 'stretch', color: '#E7E7E7', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Ensure all solutions are submitted before the timer expires. Late submissions will not be accepted.</div>
      </div>
    </div>
    <div className="Frame" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
      <div className="CheckCircleRounded" style={{width: 32, height: 32, position: 'relative'}}>
        <div className="Vector" style={{width: 26.67, height: 26.67, left: 2.67, top: 2.67, position: 'absolute', background: '#0A84FF'}}></div>
      </div>
      <div className="Frame" style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
        <div className="LeaderboardRankings" style={{alignSelf: 'stretch', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Leaderboard rankings</div>
        <div className="YourRankIsBasedOnTheNumberOfCorrectSolutionsAndYourCompletionTimeAimForAccuracyAndEfficiencyToClimbTheLeaderboard" style={{alignSelf: 'stretch', color: '#E7E7E7', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Your rank is based on the number of correct solutions and your completion time. Aim for accuracy and efficiency to climb the leaderboard.</div>
      </div>
    </div>
    <div className="Frame" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
      <div className="CheckCircleRounded" style={{width: 32, height: 32, position: 'relative'}}>
        <div className="Vector" style={{width: 26.67, height: 26.67, left: 2.67, top: 2.67, position: 'absolute', background: '#0A84FF'}}></div>
      </div>
      <div className="Frame" style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
        <div className="CrownTheWinners" style={{alignSelf: 'stretch', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Crown the winners</div>
        <div className="Day2ConcludesWithTheTop3ParticipantsEarningTheWinningSpotsCompeteWithSkillAndDeterminationToSecureYourPlace" style={{alignSelf: 'stretch', color: '#E7E7E7', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Day 2 concludes with the top 3 participants earning the winning spots. Compete with skill and determination to secure your place.</div>
      </div>
    </div>
    <div className="Frame" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
      <div className="CheckCircleRounded" style={{width: 32, height: 32, position: 'relative'}}>
        <div className="Vector" style={{width: 26.67, height: 26.67, left: 2.67, top: 2.67, position: 'absolute', background: '#0A84FF'}}></div>
      </div>
      <div className="Frame" style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
        <div className="FairPlayRequired" style={{alignSelf: 'stretch', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Fair play required</div>
        <div className="UsingUnauthorizedToolsSharingAnswersOrEngagingInAnyFormOfCheatingWillLeadToDisqualificationCompeteHonestlyToUpholdTheGameSIntegrity" style={{alignSelf: 'stretch', color: '#E7E7E7', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Using unauthorized tools, sharing answers, or engaging in any form of cheating will lead to disqualification. Compete honestly to uphold the game’s integrity.</div>
      </div>
    </div>
  </div>
</div>