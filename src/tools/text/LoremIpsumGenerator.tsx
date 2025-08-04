import React, { useState } from 'react';

const LoremIpsumGenerator = () => {
  const [paragraphs, setParagraphs] = useState<number>(3);
  const [text, setText] = useState<string>('');

  const generateText = () => {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`;
    
    let result = '';
    for (let i = 0; i < paragraphs; i++) {
      result += lorem + '\n\n';
    }
    setText(result);
  };

  return (
    <div className="tool-container">
      <h2>Lorem Ipsum Generator</h2>
      <div className="input-group">
        <label>Paragraphs:</label>
        <input 
          type="number" 
          min="1" 
          max="10" 
          value={paragraphs} 
          onChange={(e) => setParagraphs(Number(e.target.value))} 
        />
        <button onClick={generateText}>Generate</button>
      </div>
      
      {text && (
        <div className="output">
          <h3>Generated Text:</h3>
          <textarea readOnly value={text} rows={10} />
          <button onClick={() => navigator.clipboard.writeText(text)}>
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
};

export default LoremIpsumGenerator;
