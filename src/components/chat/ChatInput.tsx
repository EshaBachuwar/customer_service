import { useState } from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your query..."
        className="flex-1"
        
      />
      <Button type="submit" variant="primary" >
        Send
      </Button>
    </form>
  );
};