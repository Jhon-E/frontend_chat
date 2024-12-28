const ChatMessage = ({ position, content }) => {
  return (
    <div className={`flex justify-${position}`}>
      <div className={`bg-${position==="start"?"accent":"primary"} text-base-100 p-3 rounded-2xl rounded-${position==="start"?"bl":"br"}-none`}>{content}</div>
    </div>
  );
};

export default ChatMessage;
