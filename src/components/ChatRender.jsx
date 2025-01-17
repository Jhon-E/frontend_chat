import useSocket from "../hooks/useSocket";
import ChatMessage from "./ChatMessage";

const ChatRender = ({
  messages,
  handleSubmit,
  user,
  setMsg,
  msg,
  targetName,
}) => {
  const { isConnected } = useSocket(user.id);

  console.log({messages});
  

  return isConnected ? (
    !!targetName ? (
      <div className="flex justify-center items-center w-full h-dvh px-12">
        <div className="mr-4 bg-base-300 w-full rounded-lg border border-primary h-auto">
          {/* HEADER */}
          <div className=" p-6 bg-base-100 rounded-t-lg">
            <h2 className="font-semibold text-lg tracking-tight">
              {targetName.toUpperCase()}
            </h2>
          </div>
          {/* CONTAINER MESSAGES */}
          <div className="flex flex-col gap-6 p-5 h-max-[470px] h-[470px] overflow-x-auto">
            {messages.map((m) =>
              m.sourceName === targetName || m.name === targetName ? (
                m.id !== user.id ? (
                  <ChatMessage key={m.id} position="end" content={m.msg} />
                ) : (
                  <ChatMessage key={m.id} position="start" content={m.msg} />
                )
              ) : null
            ) }
          </div>
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center w-full p-4"
          >
            <input
              className="input w-full rounded-r-none focus:outline-none"
              placeholder="Escribe algo..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary text-base-100 rounded-l-none"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    ) : (
      <div className="flex justify-center items-center w-dvw h-dvh">
        <div className=" mr-4 bg-base-300 p-6 rounded-lg border border-primary w-[440px] h-auto">
          <h1 className="text-center text-2xl font-bold">
            Bienvenido al chatRealTime 🤓
          </h1>
          <article className="text-center">
            <p>
              <span>👈</span> ¡Empieza a hablar con alguien online!
            </p>
          </article>
        </div>
      </div>
    )
  ) : null;
};

export default ChatRender;
