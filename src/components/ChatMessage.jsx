const ChatMessage = ({ position, content }) => {
  return position === "start" ? (
    <div className="flex justify-start">
      <div className="bg-accent text-base-100 p-3 rounded-2xl rounded-bl-none">
        {content}
      </div>
    </div>
  ) : (
    <div className="flex justify-end">
      <div className="bg-primary text-base-100 p-3 rounded-2xl rounded-br-none">
        {content}
      </div>
    </div>
  );
};

export default ChatMessage;
