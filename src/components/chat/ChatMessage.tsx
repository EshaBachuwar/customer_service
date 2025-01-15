interface ChatMessageProps {
    message: string | undefined;
    isBot: boolean | undefined;
  }
  
  export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
    return (
      <div
        className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
      >
        <div
          className={`max-w-[80%] p-3 rounded-lg ${
            isBot
              ? 'bg-gray-100 text-gray-800'
              : 'bg-blue-600 text-white'
          }`}
        >
          {message}
        </div>
      </div>
    );
  };