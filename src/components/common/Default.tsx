import Image from 'next/image';
import React from 'react';

const Default = () => {
  return (
    <div className="md:col-span-9 flex flex-col justify-center items-center">
     <div>
      <Image
        src="/assests/logo.png"
        alt="Amelia Logo"
        width={150}
        height={500}
        className="rounded-full"
      />
      </div>
      <div className="text-3xl font-bold">
        Welcome to Niveda Managed Services Agent
      </div>
    </div>
  );
};

export default Default;
