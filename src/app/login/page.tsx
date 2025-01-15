import React from 'react';

export default function Login() {
  return (
    <div className='flex justify-center'>
    <div className='w-6/12 '>
      <h1 className="flex justify-center">Login</h1>
      <div className="flex flex-col gap-2 mt-4">
        <input
          type="email"
          placeholder="Email"
          
          className="rounded border-0 border-bottom p-2 "
        />
        <input
          type="password"
          placeholder="Password"
         
          className="rounded border-0 border-bottom p-2 "
        />
        <p>
          Don't have an account?
        </p>
      </div>
    </div>
    </div>
  );
}
