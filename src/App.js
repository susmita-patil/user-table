import React, { useState, useEffect } from "react";
import "./App.css";
import TableComponent from "./components/TableComponent";

import MainPage from "./components/MainPage.jsx";
import SlideDrawer from "./SlideDrawer/SlideDrawer.jsx";
import Backdrop from "./SlideDrawer/Backdrop.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    user: {},
    displayProfile: false,
    displayPost: false,
  });

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  function drawerToggleClickHandler() {
    setDrawerOpen(!drawerOpen);
  }

  function backdropClickHandler() {
    setDrawerOpen(false);
  }

  const getUserProfile = (userData) => {
    setUserProfile(userData);
  };

  let backdrop;
  if (drawerOpen) {
    backdrop = <Backdrop close={backdropClickHandler} />;
  }

  return (
    <div className="app">
      <h2>Table</h2>
      <TableComponent
        users={users}
        toggle={drawerToggleClickHandler}
        getUserProfile={getUserProfile}
      />

      <SlideDrawer show={drawerOpen} userProfile={userProfile} />
      {backdrop}
      {/* <MainPage toggle={drawerToggleClickHandler} /> */}
    </div>
  );
}

export default App;
