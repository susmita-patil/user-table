import React from "react";
import "../Styles/Profile.css";

const Profile = ({ userData }) => {
  const { street, suite, city, zipcode } = userData.address;

  return (
    <div className="profile">
      <h2>Profile</h2>
      <h3>{userData.name}</h3>
      <h4>{userData.username}</h4>

      <form>
        <label htmlFor="email">Email</label>
        <div>
          <input
            type="email"
            id="email"
            className="profile-input"
            value={userData.email}
          />
        </div>

        <label htmlFor="address">Address</label>
        <div>
          <input
            className="profile-input"
            type="text"
            id="address"
            value={`${street},${suite},${city},${zipcode}`}
          ></input>
        </div>

        <label htmlFor="phone">Phone</label>
        <div>
          <input
            type="text"
            id="phone"
            className="profile-input"
            value={userData.phone}
          ></input>
        </div>

        <label htmlFor="website">Website</label>
        <div>
          <input
            type="text"
            id="website"
            className="profile-input"
            value={userData.website}
          ></input>
        </div>

        <label htmlFor="company">Company Name</label>
        <div>
          <input
            type="text"
            id="company"
            className="profile-input"
            value={userData.company.name}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Profile;
