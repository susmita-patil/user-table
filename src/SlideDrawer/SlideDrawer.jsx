import "./SlideDrawer.css";
import React, { useState } from "react";
import Profile from "../components/Profile";
import Post from "../components/Post";

const SlideDrawer = ({ show, userProfile }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  const renderProfilePost = () => {
    if (userProfile.displayProfile) {
      return <Profile userData={userProfile.user} />;
    } else if (userProfile.displayPost) {
      return <Post userId={userProfile.user.id} name={userProfile.user.name} />;
    } else {
      return null;
    }
  };
  return <div className={drawerClasses}>{renderProfilePost()}</div>;
};

export default SlideDrawer;
