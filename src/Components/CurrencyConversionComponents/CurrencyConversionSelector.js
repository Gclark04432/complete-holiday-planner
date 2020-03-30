import React from 'react';

function CurrencyConversionSelector({baseCurrency, requestedCurrency, conversionRates}) {

  const returnRates = () => {
    Object.keys(conversionRates).forEach((key)=> {
      return (
        <p>{`key: ${key}, value: ${conversionRates[key]}`}
        </p>
      )})
    }


    return (
      <section>
      {returnRates()}
      <select>
      </select>
      <p>{baseCurrency} to {requestedCurrency}</p>
      <div>{conversionRates.CAD}</div>
      </section>
    )
  }

  export default CurrencyConversionSelector;
