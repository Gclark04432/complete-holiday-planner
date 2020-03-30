import React, { useState, useEffect } from 'react';

function CurrencyConversion() {
    const [baseCurrency, setBaseCurrency] = useState("GBP");
    const [requestedCurrency, setRequestedCurrency] = useState("EUR");

    useEffect(() => {
      fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)
        .then(res => res.json())
        .then(data => console.log(data))
    })

    return (
      <section className="currency-conversion">
        <h3>{baseCurrency} to {requestedCurrency}</h3>
      </section>
    )
}

export default CurrencyConversion;
