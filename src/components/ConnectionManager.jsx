import useSocket from "../hooks/useSocket";

const ConnectionManager = ({user}) => {
  const { isConnected, connect, disconnect } = useSocket(user);

  return (
    <div className="transition-all absolute top-5 left-5 flex gap-6">
      {isConnected?<button
        className="bg-success text-base-100 font-bold p-2 rounded-lg"
        onClick={disconnect}
      >
        Desconectarse
      </button>:<button
        className="bg-secondary text-base-100 font-bold p-2 rounded-lg"
        onClick={connect}
      >
        Conectarse
      </button>}
    </div>
  );
};

export default ConnectionManager;
