import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [currencies, setCurrencies] = useState<string[]>(['USD', 'EUR']);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setCurrencies(Object.keys(response.data.rates));
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };
    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (fromCurrency === toCurrency) {
        setExchangeRate(1);
        return;
      }
      
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        setExchangeRate(response.data.rates[toCurrency]);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        alert('Failed to get exchange rate');
      } finally {
        setIsLoading(false);
      }
    };
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const convertedAmount = exchangeRate ? (amount * exchangeRate).toFixed(2) : null;

  return (
    <div className="tool-container">
      <h2>Currency Converter</h2>
      <div className="converter">
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))} 
        />
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <span>to</span>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      
      {isLoading ? (
        <div className="loading">Loading exchange rate...</div>
      ) : (
        convertedAmount && (
          <div className="result">
            <h3>Converted Amount:</h3>
            <p>
              {amount} {fromCurrency} = {convertedAmount} {toCurrency}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default CurrencyConverter;
