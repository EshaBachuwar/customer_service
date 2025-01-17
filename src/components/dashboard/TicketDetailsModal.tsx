import React from 'react';

interface TicketDetailsModalProps {
  ticket: {
    ticket_name: string;
    ticket_description: string;
    assigned_team: string;
    ticket_id:number;
    priority:string;
    timestamp:string;

  };
  onClose: () => void;
}

export const TicketDetailsModal: React.FC<TicketDetailsModalProps> = ({
  ticket,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-7">{ticket.ticket_name}</h2>
        <p className="mt-2 text-gray-700"> <b>Ticket Id: </b>{ticket.ticket_id}</p>
        <p className="mt-2 text-gray-700"> <b>Description: </b>{ticket.ticket_description}</p>
        <p className="mt-2 text-gray-700"> <b>Priority: </b>{ticket.priority}</p>
        <p className="mt-2 text-gray-700"> <b>Date and Time </b>{ticket.timestamp}</p>
        <p className="mt-2 text-gray-700"> <b>Assigned Team:</b> {ticket.assigned_team}</p>

        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
