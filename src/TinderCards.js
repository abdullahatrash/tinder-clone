import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";
//import firebase from "firebase";

function TinderCards() {
  //useState
  const [people, setPeople] = useState([]);

  //useEffect
  useEffect(() => {
    const unsubscribe = database;
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    //console.log(database);
  }, []);

  return (
    <div>
      <div className="tinder__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
