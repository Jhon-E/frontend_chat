import { useEffect, useState, use } from "react";
import { socket } from "../socket";
import { ChatContext } from "../context/ChatContextProvider";
const useSocket = (userId) => {

  const [isConnected, setIsconnected] = useState(false);
  const contextChat = use(ChatContext);
  
    if (!contextChat) {
      throw new Error("El contexto del chat debe usarse dentro de un provider");
    }
  
    const {
      setTargetName,
    } = contextChat;

  useEffect(() => {
    const handleConnect = () => {
      if (userId) {
        setIsconnected(true);
        socket.emit("setUserId", userId);
        console.log(`User ID ${userId} enviado al servidor.`);
      } else {
        console.warn("User ID no disponible.");
      }
    };
    const handleDisconnect = () => {setIsconnected(false); setTargetName()};

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
    };
  }, [userId]);

  const connect = () => socket.connect();
  const disconnect = () => socket.disconnect();

  return { isConnected, connect, disconnect };
};

export default useSocket;
