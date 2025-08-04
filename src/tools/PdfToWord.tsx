import React, { useState } from 'react';

const PdfToWord = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleConvert = async () => {
    if (!file) {
      alert('Please select a PDF file first');
      return;
    }
    alert('PDF to Word conversion would happen here');
  };

  return (
    <div className="tool-container">
      <h2>PDF to Word Converter</h2>
      <input 
        type="file" 
        accept=".pdf" 
        onChange={(e) => setFile(e.target.files?.[0] || null)} 
      />
      <button onClick={handleConvert} disabled={!file}>
        Convert to Word
      </button>
    </div>
  );
};

export default PdfToWord;
