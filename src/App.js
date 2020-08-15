import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCard from "react-tinder-card";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
