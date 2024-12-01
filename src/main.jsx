import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
i;
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AuthProvider from "react-auth-kit";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "react-auth-kit/createStore";
import { Provider } from "react-redux";
const authStore = createStore({
  autName: "auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Navigate to="/login" /> },
      { path: "login", element: <Login /> },
      { path: "lobby", element: <Loby /> },
      { path: "game-round", element: <GRound /> },
      { path: "leaderboard", element: <LBoard /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <AuthProvider
        authType="cookie"
        autName="_auth"
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
        store={authStore}
      >
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </StrictMode>
);//building rootes and structures of pages and some acc 
// from some old projects and some old idea + new project idea