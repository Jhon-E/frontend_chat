import { createContext, useState } from "react";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [msg, setMsg] = useState();
  const [targetSocket, setTargetSocket] = useState();
  const [targetName, setTargetName] = useState();
  const [targetId, setTargetId] = useState();
  return (
    <ChatContext
      value={{
        msg,
        setMsg,
        targetSocket,
        setTargetSocket,
        targetName,
        setTargetName,
        targetId,
        setTargetId,
      }}
    >
      {children}
    </ChatContext>
  );
};

export default ChatContextProvider;
