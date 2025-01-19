'use client'
import { useEffect, useRef, useState } from 'react';
import { Card } from '../common/Card';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';

export function Agent() {
  return <Image src={`/assets/agent.png`} alt="agent" width="64" height="64" />
}
interface Message{
  text:string | undefined;
  isBot:boolean | undefined;
  timestamp:Date | undefined;
  project_id_request:boolean | undefined;
}

interface ChatBotProps {
  initialData?: { text: string; isBot: boolean; timestamp: Date } | null;
}

export const ChatBot: React.FC<ChatBotProps> = ({initialData}) => {


  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [chatWindowId, setChatWindowId] = useState<string>('');
  
  const [messages,setMessages]=useState<Message[]>([{
    text:initialData?.text ,
    isBot:initialData?.isBot ,
    timestamp:initialData?.timestamp,
    project_id_request:false,
  }]);
  console.log(messages[0]);
  
  useEffect(() => {
    let storedChatWindowId = localStorage.getItem('chat_window_id');
    if (!storedChatWindowId) {
      storedChatWindowId = uuidv4();
      localStorage.setItem('chat_window_id', storedChatWindowId);
    }
    
    setChatWindowId(storedChatWindowId);
  }, []); 
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth', 
      });
    }
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    try {
      const userMessage: Message = {
        text: message,
        isBot: false,
        timestamp: new Date(),
        project_id_request:( messages.length>0?messages[messages.length-1].project_id_request:false),
      };
      console.log((messages.length>0?messages[messages.length-1].project_id_request:false))
      setMessages(prev => [...prev, userMessage]);

      const res = await fetch('http://127.0.0.1:5000/api/sap-question',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          question:message,
          chat_window_id:chatWindowId,
          user_id:'123',
          project_id_request:( messages.length>0?messages[messages.length-1].project_id_request:false),
        }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const response=await res.json();
      const botMessage: Message = {
        text: response.answer,
        isBot: true,
        timestamp: new Date(),
        project_id_request:response.project_id_request,
      };

      console.log(response)
      
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
      setMessages(prev => [...prev, {
        text: 'Sorry, I encountered an error. Please try again.',
        isBot: true,
        timestamp: new Date(),
        project_id_request:(prev.length>0?prev[prev.length-1].project_id_request:false),
      }]);
    }
  };

  return (
    <Card title="Customer Service Agent" className="h-full">
      <div className="h-[calc(100vh-200px)] flex flex-col">
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, idx) => (
            <ChatMessage
              key={idx}
              message={msg?.text}
              isBot={msg?.isBot}
            />
          ))}
        </div>
        <div className="border-t p-4 w-full">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </Card>
  );
};