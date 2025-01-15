import { useState } from 'react';
import { Card } from '../common/Card';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';

export const ChatBot = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: 'Hello! How can I help you today?', isBot: true }
  ]);

  const handleSendMessage = async (message: string) => {
    setMessages(prev => [...prev, { text: message, isBot: false }]);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          text: 'Thanks for your message. Let me check if I can help or need to create a ticket.',
          isBot: true 
        }
      ]);
    }, 1000);
  };

  return (
    <Card title="Chat Bot" className="h-full">
      <div className="h-[calc(100vh-200px)] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, idx) => (
            <ChatMessage
              key={idx}
              message={msg.text}
              isBot={msg.isBot}
            />
          ))}
        </div>
        <div className="border-t p-4">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </Card>
  );
};