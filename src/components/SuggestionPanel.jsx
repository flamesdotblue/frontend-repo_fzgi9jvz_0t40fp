import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Minimal custom icons for crops (simple line icons for a crisp, tech feel)
function WheatIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M32 6v52" />
      <path d="M32 14c-6 0-10 4-10 10 6 0 10-4 10-10Zm0 12c6 0 10 4 10 10-6 0-10-4-10-10Z" />
      <path d="M22 36c0 6 4 10 10 10 0-6-4-10-10-10Z" />
    </svg>
  );
}
function RiceIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M12 52c10-8 22-8 40 0" />
      <path d="M20 44c6-10 18-10 24 0" />
      <path d="M32 12c-6 8-6 18 0 26 6-8 6-18 0-26Z" />
    </svg>
  );
}
function MaizeIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M32 10c8 6 12 18 8 30-12 4-24 0-30-8 6-8 18-12 30-8Z" />
      <path d="M16 46c8-4 24-4 32 0" />
    </svg>
  );
}
function CottonIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="24" cy="28" r="10" />
      <circle cx="40" cy="28" r="10" />
      <circle cx="32" cy="34" r="12" />
      <path d="M32 46v10" />
    </svg>
  );
}
function TomatoIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="32" cy="36" r="16" />
      <path d="M32 20c-2-6 4-10 8-6-2-4 6-6 8 0" />
    </svg>
  );
}

const cropIcons = {
  Wheat: WheatIcon,
  Rice: RiceIcon,
  Maize: MaizeIcon,
  Cotton: CottonIcon,
  Tomato: TomatoIcon,
};

// Simple scoring-based suggestion logic
function suggestCrop({ soilType, temperature, humidity, ph, rainfall }) {
  const scores = {
    Wheat: 0,
    Rice: 0,
    Maize: 0,
    Cotton: 0,
    Tomato: 0,
  };

  // Temperature preferences
  if (temperature >= 12 && temperature <= 25) scores.Wheat += 2;
  if (temperature >= 20 && temperature <= 38) scores.Rice += 2;
  if (temperature >= 18 && temperature <= 35) scores.Maize += 2;
  if (temperature >= 25 && temperature <= 40) scores.Cotton += 2;
  if (temperature >= 18 && temperature <= 30) scores.Tomato += 2;

  // Humidity
  if (humidity >= 40 && humidity <= 60) scores.Wheat += 1;
  if (humidity >= 60 && humidity <= 90) scores.Rice += 2;
  if (humidity >= 50 && humidity <= 70) scores.Maize += 1.5;
  if (humidity >= 40 && humidity <= 60) scores.Cotton += 1;
  if (humidity >= 50 && humidity <= 70) scores.Tomato += 1.5;

  // pH
  if (ph >= 6 && ph <= 7.5) scores.Wheat += 2;
  if (ph >= 5.5 && ph <= 7) scores.Rice += 1.5;
  if (ph >= 5.5 && ph <= 7.5) scores.Maize += 2;
  if (ph >= 5.8 && ph <= 8) scores.Cotton += 2;
  if (ph >= 6 && ph <= 6.8) scores.Tomato += 2;

  // Rainfall (mm)
  if (rainfall >= 500 && rainfall <= 1200) scores.Wheat += 1.5;
  if (rainfall >= 1200 && rainfall <= 2500) scores.Rice += 2.5;
  if (rainfall >= 600 && rainfall <= 1100) scores.Maize += 2;
  if (rainfall >= 600 && rainfall <= 1000) scores.Cotton += 1.5;
  if (rainfall >= 600 && rainfall <= 1500) scores.Tomato += 1.5;

  // Soil type adjustments
  const soil = (soilType || '').toLowerCase();
  if (soil.includes('loam')) {
    scores.Wheat += 1.5;
    scores.Tomato += 1;
    scores.Maize += 1;
  }
  if (soil.includes('clay')) {
    scores.Rice += 1.5;
    scores.Cotton += 0.5;
  }
  if (soil.includes('sandy')) {
    scores.Cotton += 1;
    scores.Maize += 1;
  }
  if (soil.includes('silt')) {
    scores.Rice += 1;
    scores.Wheat += 0.5;
  }
  if (soil.includes('peat')) {
    scores.Rice += 0.5;
    scores.Tomato += 0.5;
  }

  const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  return best;
}

export default function SuggestionPanel({ values }) {
  const suggestion = suggestCrop(values);
  const Icon = cropIcons[suggestion];

  // trigger animation on change via key
  useEffect(() => {}, [suggestion]);

  return (
    <section className="h-full rounded-2xl bg-white border border-green-100 shadow-sm p-5 md:p-6 flex flex-col">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Selected Crop Suggestion</h2>
        <p className="text-sm text-gray-500">AI-selected best fit for your conditions</p>
      </div>

      <div className="flex-1 grid place-items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={suggestion}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="relative"
          >
            {/* Aura burst */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 1, 0], scale: [0.6, 1.2, 1.6] }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute inset-0 -z-0 rounded-full"
              style={{
                boxShadow:
                  '0 0 0 0 rgba(255,255,255,0.7), 0 0 30px 10px rgba(34,197,94,0.35), 0 0 60px 20px rgba(34,197,94,0.25)'
              }}
            />

            {/* Icon container */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.05 }}
              className="relative grid place-items-center rounded-2xl p-8 md:p-10 bg-gradient-to-br from-white to-green-50 border border-green-100 shadow-inner"
            >
              <div className="text-green-600">
                <Icon className="w-28 h-28 md:w-36 md:h-36" />
              </div>
            </motion.div>

            <div className="mt-6 text-center">
              <div className="text-sm uppercase tracking-wider text-gray-500">Suggested Crop</div>
              <div className="text-2xl md:text-3xl font-semibold text-green-700">{suggestion}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
