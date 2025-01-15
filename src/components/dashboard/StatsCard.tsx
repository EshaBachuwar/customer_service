import { Card } from '../common/Card';

interface StatsCardProps {
  issuedTickets: number;
  solvedTickets: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({ issuedTickets, solvedTickets }) => {
  return (
    <Card title="Ticket Statistics">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Issued</p>
          <p className="text-2xl font-bold">{issuedTickets}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Solved</p>
          <p className="text-2xl font-bold">{solvedTickets}</p>
        </div>
      </div>
    </Card>
  );
};