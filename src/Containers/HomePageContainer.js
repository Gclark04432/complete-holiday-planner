import React from 'react';
import CurrencyConversion from '../Components/CurrencyConversionComponents/CurrencyConversionComponent'
import CountryContainer from '../Containers/CountryContainer'

function HomePageContainer() {
  return (
    <article>
      <h2>Home Page Container</h2>
      <CurrencyConversion/>
      <CountryContainer/>
    </article>
  )
}

export default HomePageContainer;
