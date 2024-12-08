import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, loginUser } from "../../redux/login/action";
import { useNavigate } from "react-router-dom";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import InputField from "../components/ui-elements/input/InputField";
import PrimaryButton from "../components/ui-elements/buttons/PrimaryButton.jsx";
import Landing from "../components/codeEditor/elemnts/Landing.jsx";
const Login = () => {
  return <Landing />;
};

export default Login;
