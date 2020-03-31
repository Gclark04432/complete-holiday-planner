import React from 'react';

const CountrySelector = (props) => {
  if (!props.countries) return null;
  const options = props.countries.map(country => {
    return <option value={country.alpha3Code} key={country.alpha3Code}>{country.name}</option>
  })

  function handleChange(event) {
    props.onCountrySelected(event.target.value);
  }

  return (
    <select id="country-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a country...</option>
      {options}
    </select>
  )
}

export default CountrySelector;
