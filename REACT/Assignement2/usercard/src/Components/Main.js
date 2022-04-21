import { useState, useEffect } from "react";
import "./css/Main.css";
import SocialCard from "./SocialCard";

function Main() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=50");
        userData = await response.json();
        // console.log(userData);
      } catch (error) {
        // console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);
  return (
    <div className="App">
      <div className="cards-container">

      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default Main;
