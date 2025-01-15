import { useState } from 'react';
import { Card } from '../common/Card';
import { Tabs } from '../common/Tabs';
import { Ticket } from '../../types';

interface TicketListProps {
  tickets: Ticket[];
}

export const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  const [activeTab, setActiveTab] = useState('open');

  const tabs = [
    { id: 'open', label: 'Open' },
    { id: 'closed', label: 'Closed' },
  ];

  const filteredTickets = tickets.filter(
    (ticket) => ticket.status === activeTab
  );

  return (
    <Card>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="mt-4 space-y-4">
        {filteredTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{ticket.title}</h3>
                <p className="text-sm text-gray-500">
                  Group: {ticket.group}
                </p>
              </div>
              {/* <span
                className={`px-2 py-1 rounded-full text-sm ${
                  ticket.status === 'open'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {ticket.status}
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};