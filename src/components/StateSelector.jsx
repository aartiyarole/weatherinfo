import React from "react";

export default function StateSelector({ states, selectedState, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label">Select City:</label>
      <select
        className="form-select"
        value={selectedState}
        onChange={(e) => onChange(e.target.value)}
      >
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}
