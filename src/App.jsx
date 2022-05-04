import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import React, { Suspense } from "react";
import "./App.css";
import { Choose } from "./pages/Choose";
const RemoteApp = React.lazy(() => import("pokemon/App"));

const App = () => {
  const location = new ReactLocation();

  return (
    <Router
      location={location}
      routes={[
        {
          path: "/",
          element: <Choose />,
        },
        { path: "products", element: <>Container products</> },
        { path: "pricing", element: <>Container pricing</> },
        {
          path: "evolutions",
          element: (
            <Suspense fallback={"loading..."}>
              <RemoteApp location={location} basepath="/" />
            </Suspense>
          ),
        },
      ]}
    >
      <Outlet />
    </Router>
  );
};

export default App;
