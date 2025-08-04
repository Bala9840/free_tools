import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PdfToWord from './tools/PdfToWord';
import PdfToExcel from './tools/PdfToExcel';
import WordToPdf from './tools/WordToPdf';
import ImageCompressor from './tools/image/ImageCompressor';
import BgRemover from './tools/image/BgRemover';
import LoremIpsumGenerator from './tools/text/LoremIpsumGenerator';
import PasswordGenerator from './tools/text/PasswordGenerator';
import UnitConverter from './tools/utils/UnitConverter';
import CurrencyConverter from './tools/utils/CurrencyConverter';
import './styles.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pdf-to-word" element={<PdfToWord />} />
        <Route path="/pdf-to-excel" element={<PdfToExcel />} />
        <Route path="/word-to-pdf" element={<WordToPdf />} />
        <Route path="/compress-image" element={<ImageCompressor />} />
        <Route path="/remove-bg" element={<BgRemover />} />
        <Route path="/lorem-ipsum" element={<LoremIpsumGenerator />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/unit-converter" element={<UnitConverter />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
