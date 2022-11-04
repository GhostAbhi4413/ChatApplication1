import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <t onClick={() => signOut(auth)}>logout</t>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
