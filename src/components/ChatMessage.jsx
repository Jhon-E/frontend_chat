const ChatMessage = ({ position, content }) => {
  console.log({ position });

  return (
    <div className={`flex justify-${position}`}>
      {position === "start" ? (
        <div className="bg-accent text-base-100 p-3 rounded-2xl rounded-bl-none">
          {content}
        </div>
      ) : (
        <div className="bg-primary text-base-100 p-3 rounded-2xl rounded-br-none">
          {content}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
