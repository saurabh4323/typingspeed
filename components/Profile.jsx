"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./profile.css";

export default function Profile() {
  const [data, setdata] = useState([]);

  const email = localStorage.getItem("email");

  useEffect(() => {
    if (email) {
      logindata();
    }
  }, [email]);

  const logindata = async () => {
    try {
      const response = await axios.get(`api/user/profile/${email}`);
      setdata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="profile-container">
      <div className="heading">Your Profile</div>
      <div className="table-container">
        <table className="profile-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>WPM</th>
              <th>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {data && Array.isArray(data) ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.email}</td>
                  <td>{item.wpm}</td>
                  <td>{item.accuracy}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No profile data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
