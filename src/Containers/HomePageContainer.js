import React from 'react';
import CurrencyConversion from '../Components/CurrencyConversionComponents/CurrencyConversionComponent'
import CountrySelector from '../Components/CountrySelectorComponents/CountrySelector'

function HomePageContainer() {
  return (
    <article>
      <h2>Home Page Container</h2>
      <CurrencyConversion/>
      <CountrySelector/>
    </article>
  )
}

export default HomePageContainer;
