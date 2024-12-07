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
    const result = await dispatch(
      loginUser({ email: localEmail, password: localPassword })
    );
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

  return (
    <div
      style={{
        display: "flex",
        width: "1440px",
        padding: "318px 420px",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--Dark-Gray, #121212)",
      }}
    >
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
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "40px",
        }}
      ></p>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
          alignSelf: "stretch",
        }}
        onSubmit={handleSubmit}
      >
        {/*input field for email  */}
        <InputField
          placeholder="Email"
          value={localEmail}
          onChange={(e) => setLocalEmail(e.target.value)}
        />
        {/*input field for password  */}
        <InputField
          placeholder="Password"
          value={localEmail}
          onChange={(e) => setLocalEmail(e.target.value)}
        />
        {/*Display errors if exists  */}
        {error && <p style={{ color: "red" }}> {error}</p>}
        {/*show loading or submit butto */}
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <PrimaryButton txt="Log in" full type="submit" />
        )}
        {/*Links to other pages*/}
      </form>
    </div>
  );
};

export default Login;
