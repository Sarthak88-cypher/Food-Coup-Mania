import React, { useState } from "react";
import Header from "./Components/Navbar/Header";
import "./App.css";
import OfferFilter from "./Components/Filters/OfferFilter";
import Login from "./Components/Login/Form";
import YourCuisine from "./Components/YourCuisine/YouCuisine";
import * as Sentry from "@sentry/react";

// This is the root file where we basically control the individual components.
// To keep this simple and make one page render app, We have used react usestate (page) to control the components.

function App() {
  const [page, setPage] = useState(0);
  const [userDetails, setUserDetails] = useState([]);
  return (
    <>
      <Header setPage={setPage} userDetails={userDetails} setUserDetails={setUserDetails} />
      <div className="App">
      {page === 0 && <OfferFilter />}
      {page === 1 && <Login setPage={setPage} setUserDetails={setUserDetails} />}
      {page === 2 && <YourCuisine userDetails={userDetails} />}
      </div>
    </>
  );
}

export default Sentry.withProfiler(App);
