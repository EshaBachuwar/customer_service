import { useState } from 'react';
import { Card } from '../common/Card';
import { Tabs } from '../common/Tabs';
import { Ticket } from '../../types';
import { TicketDetailsModal } from './TicketDetailsModal';

interface TicketListProps {
  tickets: Ticket[];
}

export const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  const [activeTab, setActiveTab] = useState('open');
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const tabs = [
    { id: 'open', label: 'Open' },
    { id: 'closed', label: 'Closed' },
  ];

  const filteredTickets = tickets.filter(
    (ticket) => ticket.status === activeTab
  );
  const handleTicketClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCloseModal = () => {
    setSelectedTicket(null);
  };
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
            key={ticket.ticket_id}
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => handleTicketClick(ticket)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{ticket.ticket_name}</h3>
                <p className="text-sm text-gray-500">
                  Group: {ticket.assigned_team}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedTicket && (
        <TicketDetailsModal
          ticket={selectedTicket}
          onClose={handleCloseModal}
        />
      )}
    </Card>
  );
};