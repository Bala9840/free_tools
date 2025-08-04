import React, { useState } from 'react';

const PdfToExcel = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleConvert = async () => {
    if (!file) {
      alert('Please select a PDF file first');
      return;
    }
    alert('PDF to Excel conversion would happen here');
  };

  return (
    <div className="tool-container">
      <h2>PDF to Excel Converter</h2>
      <input 
        type="file" 
        accept=".pdf" 
        onChange={(e) => setFile(e.target.files?.[0] || null)} 
      />
      <button onClick={handleConvert} disabled={!file}>
        Convert to Excel
      </button>
    </div>
  );
};

export default PdfToExcel;
