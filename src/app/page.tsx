'use client';

import { useState } from 'react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { TicketList } from '@/components/dashboard/TicketList';
import { ChatBot } from '@/components/chat/ChatBot';
import { ProfileSection } from '@/components/dashboard/ProfileSection';

const MOCK_TICKETS = [
  {
    id: 1,
    title: 'Cannot access admin panel',
    status: 'open',
    group: 'configurations',
    createdAt: new Date(),
    description: 'Having issues accessing the admin panel after recent update',
  },
  {
    id: 2,
    title: 'Reset password not working',
    status: 'closed',
    group: 'security',
    createdAt: new Date(),
    description: 'Password reset email is not being received',
  },
  {
    id: 3,
    title: 'API integration error',
    status: 'open',
    group: 'technical',
    createdAt: new Date(),
    description: 'Getting 500 error when trying to integrate with payment API',
  },
];

export default function Home() {
  const [tickets] = useState(MOCK_TICKETS);

  // Calculate statistics
  const stats = {
    issuedTickets: tickets.length,
    solvedTickets: tickets.filter((ticket) => ticket.status === 'closed')
      .length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        <div className="md:col-span-3 space-y-6">
          <ProfileSection />
          <StatsCard
            issuedTickets={stats.issuedTickets}
            solvedTickets={stats.solvedTickets}
          />
        </div>

        <div className="md:col-span-6">
          <div className="bg-white rounded-lg shadow-sm">
            <TicketList tickets={tickets} />
          </div>
        </div>

        <div className="md:col-span-3">
          <ChatBot />
        </div>
      </div>
    </div>
  );
}
