'use client'
import { useEffect, useState } from 'react';
import { Card } from '../common/Card';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';

interface Message{
  text:string | undefined;
  isBot:boolean | undefined;
  timestamp:Date | undefined;
}

interface ChatBotProps {
  initialData?: { text: string; isBot: boolean; timestamp: Date } | null;
}

export const ChatBot: React.FC<ChatBotProps> = ({initialData}) => {

  console.log(initialData)
  
  const [messages,setMessages]=useState<Message[]>([{
    text:initialData?.text ,
    isBot:initialData?.isBot ,
    timestamp:initialData?.timestamp,
  }]);
  console.log(messages[0]);
  
  
  // useEffect(()=>{
  //   const fetchInitData=async()=>{
  //     let init_data=await fetch('http://127.0.0.1:5000/');
  //     let data=await init_data.json()
  //     setMessages([{
  //       text:data.message,
  //       isBot:true,
  //       timestamp:new Date()
  //     }])
  //   }
  //   fetchInitData();    
  // },[])
  

  const handleSendMessage = async (message: string) => {
    try {
      const userMessage: Message = {
        text: message,
        isBot: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);

      const res = await fetch('http://127.0.0.1:5000/api/sap-question',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          question:message,
          chat_window_id:'123',
          user_id:'123',
        }),
      });
      console.log("jcfjefe")
      
      const response=await res.json();
      console.log(response);
      console.log(response.answer);
      const botMessage: Message = {
        text: response.answer,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
      setMessages(prev => [...prev, {
        text: 'Sorry, I encountered an error. Please try again.',
        isBot: true,
        timestamp: new Date()
      }]);
    }
  };

  return (
    <Card title="Chat Bot" className="h-full">
      <div className="h-[calc(100vh-200px)] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, idx) => (
            <ChatMessage
              key={idx}
              message={msg?.text}
              isBot={msg?.isBot}
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