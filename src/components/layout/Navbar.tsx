'use client';
import { Button } from '../common/Button';
import { useRouter } from 'next/navigation'

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-sky-950 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Niveda - AMELIA AI Agent Support</h1>
        <Button variant="primary" size="sm" onClick={() => router.push('/login')}>Login</Button>
      </div>
    </nav>
  );
};
