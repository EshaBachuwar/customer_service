// src/hooks/useInitialChat.ts
import { useState, useEffect } from 'react';


export const useInitialChat = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [initialData, setInitialData] = useState<{
    text: string;
    isBot:boolean;
    timestamp:Date;
  } | null>(null);

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const data = await fetch('http://127.0.0.1:5000/');
        const res=await data.json();
        setInitialData({
            text:res.message,
            isBot:true,
            timestamp:new Date(),
        });
      } catch (err) {
        setError('Failed to initialize chat');
      } finally {
        setIsLoading(false);
      }
    };

    initializeChat();
  }, []);

  return { isLoading, error, initialData };
};