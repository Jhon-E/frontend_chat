import { socket } from "../socket";
import { ChatContext } from "../context/ChatContextProvider";
import { useEffect, useState, use } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import ChatRender from "../components/ChatRender";
import ListOfUsers from "../components/ListOfUsers";
import ConnnectionManager from "../components/ConnectionManager";

const Chat = () => {
  const { user } = use(AuthContext);
  const contextChat = use(ChatContext);
  const [people, setPeople] = useState([]);

  if (!contextChat) {
    throw new Error("El contexto del chat debe usarse dentro de un provider");
  }

  if (!user) {
    throw new Error(
      "Para consumir el contexto auth debe estar dentro de un provider."
    );
  }

  const {
    msg,
    setMsg,
    targetSocket,
    setTargetSocket,
    targetName,
    setTargetName,
    targetId,
    setTargetId,
  } = contextChat;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("usersOnline", (users) => {
      setPeople(
        users.filter((p) => p.nombre !== user.nombre && p.id_user !== user.id)
      );
    });

    socket.on("chat-message", (data) => {
      console.log({data});
      
      setMessages((prev) => [...prev, data]);
    });

    socket.emit("setUserId", user.id);

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ msg, targetSocket });

    if (msg !== "" && targetSocket) {
      socket.emit("chat-message", { msg, targetSocket, targetId, targetName, sourceName:user.nombre });
      setMsg("");
    }
  };

  return (
    <div className="h-dvh w-dvw flex justify-center items-center py-6">
      <ConnnectionManager user={user.id} />
      <ListOfUsers
        people={people}
        setTarget={setTargetSocket}
        setTargetId={setTargetId}
        setTargetName={setTargetName}
        targetName={targetName}
        messages={messages}
      />
      <ChatRender
        messages={messages}
        handleSubmit={handleSubmit}
        targetName={targetName}
        user={user}
        setMsg={setMsg}
        msg={msg}
      />
    </div>
  );
};

export default Chat;
