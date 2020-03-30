import React, { useState, useEffect } from 'react';

function CurrencyConversion() {
  const [baseCurrency, setBaseCurrency] = useState("GBP");
  const [requestedCurrency, setRequestedCurrency] = useState("EUR");
  const [conversionRates, setConversionRates] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)
      .then(res => res.json())
      .then(data => setConversionRates(data.rates))
    },[])

    function displayRates(){
      if (conversionRates.length === 0) return null;
      for (let latestRate in conversionRates){
        console.log(conversionRates);
        return (
            <li>{latestRate}</li> )
      }
    }

    return (
      <section className="currency-conversion">
        <h3>{baseCurrency} to {requestedCurrency}</h3>
        <ul>
        { displayRates() }
        </ul>
      </section>
    )
  }

  export default CurrencyConversion;
