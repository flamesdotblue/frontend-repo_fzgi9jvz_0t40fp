import React, { useState } from 'react';
import Header from './components/Header.jsx';
import InputPanel from './components/InputPanel.jsx';
import ReflectionPanel from './components/ReflectionPanel.jsx';
import SuggestionPanel from './components/SuggestionPanel.jsx';

export default function App() {
  const [values, setValues] = useState({
    soilType: 'Loam',
    temperature: 26,
    humidity: 60,
    ph: 6.5,
    rainfall: 800,
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Subtle top accent */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-40 bg-gradient-to-b from-green-100/80 to-transparent" />

      <Header />

      <main className="px-6 md:px-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Values */}
          <InputPanel values={values} onChange={setValues} />

          {/* Field Data Reflection */}
          <ReflectionPanel values={values} />

          {/* Selected Crop Suggestion */}
          <SuggestionPanel values={values} />
        </div>
      </main>
    </div>
  );
}
