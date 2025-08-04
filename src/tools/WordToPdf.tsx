import React, { useState } from 'react';

const WordToPdf = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleConvert = async () => {
    if (!file) {
      alert('Please select a Word file first');
      return;
    }
    alert('Word to PDF conversion would happen here');
  };

  return (
    <div className="tool-container">
      <h2>Word to PDF Converter</h2>
      <input 
        type="file" 
        accept=".doc,.docx" 
        onChange={(e) => setFile(e.target.files?.[0] || null)} 
      />
      <button onClick={handleConvert} disabled={!file}>
        Convert to PDF
      </button>
    </div>
  );
};

export default WordToPdf;
