'use client';

import { useState } from 'react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { TicketList } from '@/components/dashboard/TicketList';
import { ChatBot } from '@/components/chat/ChatBot';
import { ProfileSection } from '@/components/dashboard/ProfileSection';
import { useInitialChat, getTickets } from '@/hooks/initialChat';
import RevolvingImage from '@/components/common/RevolvingImage';
import LeftPanel from '@/components/leftPanel/LeftPanel';
import ServiceDeskAgent from '@/components/serviceDeskAgent/ServiceDeskAgent';
import ResponseAgent from '@/components/responseAgent/ResponseAgent';
import SolutionServiceAgent from '@/components/solutionServiceAgent/SolutionServiceAgent';
import Default from '@/components/common/Default';

export default function Home() {
  const tickets = getTickets();
  const { isLoading, error, initialData } = useInitialChat();
  console.log(initialData);

  const stats = {
    issuedTickets: tickets.length,
    solvedTickets:
      tickets.length > 0
        ? tickets.filter((ticket) => ticket.status === 'closed').length
        : 0,
  };

  const [agentId, setAgentId] = useState('default');

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* <div className="fixed inset-0 pointer-events-none">
        <RevolvingImage />
      </div> */}
      <div className="max-w-8xl mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          <div className="md:col-span-3 space-y-6">
            {/* <ProfileSection /> */}
            <LeftPanel setAgentId={setAgentId} />
            {/* <StatsCard
              issuedTickets={stats.issuedTickets}
              solvedTickets={stats.solvedTickets}
            /> */}
          </div>
          {agentId === 'default' && <Default />}
          {agentId === 'Customer Service Agent' && (
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-9 gap-2">

              <div className="md:col-span-9">
                { <ChatBot initialData={initialData} />}
              </div>
            </div>
          )}
          {agentId === 'Service Desk Agent' && ( <div className='md:col-span-9 '> <ServiceDeskAgent /></div>)}
          {agentId === 'Response Agent' && <ResponseAgent />}
          {agentId === 'Solution Service Agent' && <SolutionServiceAgent />}
          {agentId === 'Ticket Dashboard' && (
            <div className=' md:col-span-9 grid grid-cols-1 md:grid-cols-9 gap-10'>
              <div className="md:col-span-5">
                <div className="bg-white rounded-lg shadow-sm">
                  <TicketList tickets={tickets} />
                </div>
              </div>
              <div className='md:col-span-3 space-y-6'>
               <StatsCard
              issuedTickets={stats.issuedTickets}
              solvedTickets={stats.solvedTickets}
            />
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
