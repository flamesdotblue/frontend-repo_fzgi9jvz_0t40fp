import React from 'react';

const fieldClass =
  'w-full rounded-xl border border-green-200 focus:border-green-500 focus:ring-4 focus:ring-green-200 outline-none px-4 py-3 bg-white text-gray-900 placeholder:text-gray-400 transition';

export default function InputPanel({ values, onChange }) {
  return (
    <section className="h-full rounded-2xl bg-white border border-green-100 shadow-sm p-5 md:p-6 flex flex-col gap-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Input Values</h2>
        <p className="text-sm text-gray-500">Enter your field parameters</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Soil Type</label>
          <select
            className={fieldClass}
            value={values.soilType}
            onChange={(e) => onChange({ ...values, soilType: e.target.value })}
          >
            <option value="Loam">Loam</option>
            <option value="Clay">Clay</option>
            <option value="Sandy">Sandy</option>
            <option value="Silt">Silt</option>
            <option value="Peaty">Peaty</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Temperature (°C)</label>
          <input
            type="number"
            className={fieldClass}
            value={values.temperature}
            onChange={(e) => onChange({ ...values, temperature: Number(e.target.value) })}
            placeholder="e.g., 26"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Humidity (%)</label>
          <input
            type="number"
            className={fieldClass}
            value={values.humidity}
            onChange={(e) => onChange({ ...values, humidity: Number(e.target.value) })}
            placeholder="e.g., 60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">pH Level</label>
          <input
            type="number"
            step="0.1"
            className={fieldClass}
            value={values.ph}
            onChange={(e) => onChange({ ...values, ph: Number(e.target.value) })}
            placeholder="e.g., 6.5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rainfall (mm)</label>
          <input
            type="number"
            className={fieldClass}
            value={values.rainfall}
            onChange={(e) => onChange({ ...values, rainfall: Number(e.target.value) })}
            placeholder="e.g., 800"
          />
        </div>
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={() =>
            onChange({ soilType: 'Loam', temperature: 26, humidity: 60, ph: 6.5, rainfall: 800 })
          }
          className="w-full rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-3 shadow-md shadow-green-500/30 hover:shadow-lg hover:shadow-green-500/40 transition"
        >
          Reset to Typical Values
        </button>
      </div>
    </section>
  );
}
