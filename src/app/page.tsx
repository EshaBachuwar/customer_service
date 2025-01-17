'use client';

import { useState } from 'react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { TicketList } from '@/components/dashboard/TicketList';
import { ChatBot } from '@/components/chat/ChatBot';
import { ProfileSection } from '@/components/dashboard/ProfileSection';
import { useInitialChat,getTickets } from '@/hooks/initialChat';
import RevolvingImage from '@/components/common/RevolvingImage';

export default function Home() {

  const tickets =getTickets();
  const { isLoading, error, initialData } = useInitialChat();
  console.log(initialData);
  

  const stats = {
    issuedTickets: tickets.length,
    solvedTickets:tickets.length>0? tickets.filter((ticket) => ticket.status === 'closed')
      .length:0,
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="fixed inset-0 pointer-events-none">
        <RevolvingImage />
      </div>
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        <div className="md:col-span-3 space-y-6">
          <ProfileSection />
          <StatsCard
            issuedTickets={stats.issuedTickets}
            solvedTickets={stats.solvedTickets}
          />
        </div>

        <div className="md:col-span-5">
          <div className="bg-white rounded-lg shadow-sm">
            <TicketList tickets={tickets} />
          </div>
        </div>

        <div className="md:col-span-4">
        {initialData && <ChatBot initialData={initialData} />}
        </div>
      </div>
    </div>
    </div>
  );
}
