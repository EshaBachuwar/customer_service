'use client';
import { Button } from '../common/Button';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-slate-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
          <Image 
            src="/assests/logo.png" 
            alt="Amelia Logo"
            width={100}
            height={80}
            className="rounded-full"  
          />
        <h1 className="text-xl font-bold text-slate-100"> AMELIA AI Agent Support</h1>
        </div>
        <Button variant="primary" size="sm" onClick={() => router.push('/login')}>Login</Button>
      </div>
    </nav>
  );
};
