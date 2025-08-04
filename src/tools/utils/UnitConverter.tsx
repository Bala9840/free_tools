import React, { useState } from 'react';

const UnitConverter = () => {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>('cm');
  const [toUnit, setToUnit] = useState<string>('inch');
  const [result, setResult] = useState<number | null>(null);

  const units = [
    { name: 'Centimeters', value: 'cm' },
    { name: 'Inches', value: 'inch' },
    { name: 'Feet', value: 'ft' },
    { name: 'Meters', value: 'm' },
    { name: 'Kilometers', value: 'km' },
    { name: 'Miles', value: 'mi' }
  ];

  const convert = () => {
    // Conversion factors
    const factors: Record<string, number> = {
      cm: 1,
      inch: 0.393701,
      ft: 0.0328084,
      m: 0.01,
      km: 0.00001,
      mi: 0.00000621371
    };

    if (fromUnit === toUnit) {
      setResult(value);
      return;
    }

    // Convert to cm first, then to target unit
    const inCm = value / factors[fromUnit];
    const converted = inCm * factors[toUnit];
    setResult(parseFloat(converted.toFixed(4)));
  };

  return (
    <div className="tool-container">
      <h2>Unit Converter</h2>
      <div className="converter">
        <input 
          type="number" 
          value={value} 
          onChange={(e) => setValue(Number(e.target.value))} 
        />
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {units.map((unit) => (
            <option key={unit.value} value={unit.value}>{unit.name}</option>
          ))}
        </select>
        <span>to</span>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {units.map((unit) => (
            <option key={unit.value} value={unit.value}>{unit.name}</option>
          ))}
        </select>
        <button onClick={convert}>Convert</button>
      </div>
      
      {result !== null && (
        <div className="result">
          <h3>Result:</h3>
          <p>{value} {fromUnit} = {result} {toUnit}</p>
        </div>
      )}
    </div>
  );
};

export default UnitConverter;
