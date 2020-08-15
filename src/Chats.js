import React from "react";
import "./Chats.css";
import Chat from "./Chat";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="https://i1.rgstatic.net/ii/profile.image/714587074752523-1547382243576_Q512/Esmaeel_Fatahian.jpg"
      />
      <Chat
        name="Abodi"
        message="How are you all!"
        timestamp="20 seconds ago"
        profilePic="https://pbs.twimg.com/media/DY6J2-hWAAYEpF-.jpg"
      />
      <Chat
        name="Ariana"
        message="hot girl check yooo"
        timestamp="30 seconds ago"
        profilePic="https://media.distractify.com/brand-img/GyAESLW_7/0x0/charli-damelio-tiktok-fight-1581611185338.jpg"
      />
      <Chat
        name="Loren"
        message="tiktok blonde yooo!!"
        timestamp="22 seconds ago"
        profilePic="https://ei.marketwatch.com/Multimedia/2020/01/21/Photos/ZQ/MW-HY732_TikTok_20200121135759_ZQ.jpg?uuid=f177e9fa-3c7f-11ea-b3e2-9c8e992d421e"
      />
    </div>
  );
}

export default Chats;
