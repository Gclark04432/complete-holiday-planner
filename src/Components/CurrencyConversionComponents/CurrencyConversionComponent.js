import React, { useState, useEffect } from 'react';
import CurrencyConversionSelector from './CurrencyConversionSelector';

function CurrencyConversion() {
  const [baseCurrency, setBaseCurrency] = useState("GBP");
  const [requestedCurrency, setRequestedCurrency] = useState("USD");
  const [conversionRates, setConversionRates] = useState({});


  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)
      .then(res => res.json())
      .then(data => setConversionRates(data.rates))
    },[])

    if (conversionRates.length === 0) return null;

    return (
      <section className="currency-conversion">
        <CurrencyConversionSelector
          baseCurrency={baseCurrency}
          requestedCurrency={requestedCurrency}
          conversionRates={conversionRates}
        />
        <h4>{conversionRates[requestedCurrency]}</h4>
      </section>
    )
  }

  export default CurrencyConversion;
