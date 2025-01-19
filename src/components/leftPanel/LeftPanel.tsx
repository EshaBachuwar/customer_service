import React from 'react';

const LeftPanel = ({ setAgentId }: { setAgentId: Function }) => {
  return (
    <div>
      <div className="w-64 h-[85vh] bg-gray-800 text-white flex flex-col">
        <div className="p-4 flex-shrink-0">
          <div
            className="flex items-center gap-3 mb-6 cursor-pointer justify-center"
            onClick={() => setAgentId('default')}
          >
            <span className="font-extrabold text-xl text-blue-300">AMELIA</span>
          </div>
          <div className="space-y-2 mb-4">
            {[
              'Customer Service Agent',
              'Service Desk Agent',
              'Response Agent',
              'Solution Service Agent',
              'Ticket Dashboard'
            ].map((agent) => (
              <button
                key={agent}
                className="flex items-center gap-2 w-full p-3 rounded hover:bg-gray-700"
                onClick={() => setAgentId(agent)}
              >
                {/* <CheckCircle size={16} className="text-emerald-500" /> */}
                <span>{agent}</span>
              </button>
            ))}
          </div>
        </div>
        {/* <div
        className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#4A5568 #2D3748' }}
    >
        {chats.map((chat) => (
    <button
            key={chat.id}
            onClick={() => setCurrentChatId(chat.id)}
            className={`flex items-center gap-2 w-full p-2 rounded hover:bg-gray-700 ${
              chat.id === currentChatId ? 'bg-gray-700' : ''
            }`}
    >
    <CheckCircle size={16} className="text-emerald-500" />
    <span className="truncate">{chat.title}</span>
    </button>
        ))}
    </div> */}
      </div>
    </div>
  );
};

export default LeftPanel;
