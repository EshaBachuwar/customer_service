import { Card } from '../common/Card';

export const ProfileSection = () => {
  return (
    <Card title="Profile" className="mb-6">
      <div className="space-y-4">
        <div className="h-20 w-20 rounded-full bg-gray-200 mx-auto" />
        <div className="text-center">
          <h3 className="font-medium">ABC DEF</h3>
          <p className="text-sm text-gray-500">abc@example.com</p>
        </div>
      </div>
    </Card>
  );
};