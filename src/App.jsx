import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import { store, autStore } from "../Redux/Store";
import { AppProvider } from "./context/AppContext";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 1);
  }, [location.pathname]);

  return (
    <Provider store={store}>
      <AppProvider store={autStore}>
        <div className="content">
          {/* Render Navbar only if the pathname is not "/login" */}
          {location.pathname !== "/login" && <Navbar />}
          <main className="content">
            <Outlet />
          </main>
        </div>
      </AppProvider>
    </Provider>
  );
}

export default App;
