// App.jsx
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/sections/Navbar.jsx";
import { Provider } from "react-redux";
import { store, authStore } from "../redux/store.js";
import { AppProvider } from "./context/AppContext";
import "./index.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 1);
  }, [location.pathname]);
  console.log(location.pathname);
  function Logged() {
    if (location.pathname !== "/login") 
      return <Navbar />;
    else 
      return <></>;
  }
  return (
    <Provider store={store}>
      <AppProvider store={authStore}>
        <div className="content">
          <Logged />
          <main className="content">
            <Outlet />
          </main>
        </div>
      </AppProvider>
    </Provider>
  );
}

export default App;
