import React, { useEffect, useState } from "react";
import "../App.css";
import "../Styles/TableComponent.css";

const TableComponent = ({ users, toggle, getUserProfile }) => {
  const [userProfile, setUserProfile] = useState({
    user: {},
    displayProfile: false,
    displayPost: false,
  });

  useEffect(() => {
    getUserProfile(userProfile);
  }, [userProfile]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <a
                    href="#"
                    onClick={() => {
                      toggle();
                      setUserProfile((prevState) => ({
                        ...prevState,
                        user: user,
                        displayPost: false,
                        displayProfile: true,
                      }));
                    }}
                  >
                    View Profile
                  </a>
                </td>

                <td>
                  <a
                    href="#"
                    onClick={() => {
                      toggle();
                      setUserProfile((prevState) => ({
                        ...prevState,
                        user: user,
                        displayProfile: false,
                        displayPost: true,
                      }));
                    }}
                  >
                    View Post
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* {userProfile.displayProfile ? (
        <Profile userData={userProfile.user} />
      ) : null}

      {userProfile.displayPost ? <Post userId={userProfile.user.id} /> : null} */}
    </>
  );
};
export default TableComponent;
