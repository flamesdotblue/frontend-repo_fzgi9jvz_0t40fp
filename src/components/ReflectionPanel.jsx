import React from 'react';

function DataCard({ label, value, unit }) {
  return (
    <div className="rounded-xl border border-green-100 bg-white p-4 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-green-600">
        {value}
        {unit ? <span className="ml-1 text-base font-medium text-green-500">{unit}</span> : null}
      </div>
    </div>
  );
}

export default function ReflectionPanel({ values }) {
  return (
    <section className="h-full rounded-2xl bg-white border border-green-100 shadow-sm p-5 md:p-6 flex flex-col gap-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Field Data Reflection</h2>
        <p className="text-sm text-gray-500">Live mirror of your inputs</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <DataCard label="Soil Type" value={values.soilType} />
        <DataCard label="Temperature" value={values.temperature} unit="°C" />
        <DataCard label="Humidity" value={values.humidity} unit="%" />
        <DataCard label="pH Level" value={values.ph} />
        <DataCard label="Rainfall" value={values.rainfall} unit="mm" />
      </div>
    </section>
  );
}
