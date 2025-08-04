import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');

  const generatePassword = () => {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()';

    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result);
  };

  return (
    <div className="tool-container">
      <h2>Password Generator</h2>
      <div className="password-settings">
        <div className="setting">
          <label>Length: {length}</label>
          <input 
            type="range" 
            min="6" 
            max="32" 
            value={length} 
            onChange={(e) => setLength(Number(e.target.value))} 
          />
        </div>
        <div className="setting">
          <label>
            <input 
              type="checkbox" 
              checked={includeUppercase} 
              onChange={(e) => setIncludeUppercase(e.target.checked)} 
            />
            Include Uppercase
          </label>
        </div>
        <div className="setting">
          <label>
            <input 
              type="checkbox" 
              checked={includeNumbers} 
              onChange={(e) => setIncludeNumbers(e.target.checked)} 
            />
            Include Numbers
          </label>
        </div>
        <div className="setting">
          <label>
            <input 
              type="checkbox" 
              checked={includeSymbols} 
              onChange={(e) => setIncludeSymbols(e.target.checked)} 
            />
            Include Symbols
          </label>
        </div>
        <button onClick={generatePassword}>Generate Password</button>
      </div>
      
      {password && (
        <div className="password-result">
          <h3>Your Password:</h3>
          <div className="password-display">{password}</div>
          <button onClick={() => navigator.clipboard.writeText(password)}>
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
