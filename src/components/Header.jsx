import React from 'react';
import { Leaf } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full py-6 px-6 md:px-10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg shadow-green-500/30">
          <Leaf className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Smart Farming Dashboard</h1>
          <p className="text-sm text-gray-500">AI-powered crop suggestion based on your field parameters</p>
        </div>
      </div>
    </header>
  );
}
