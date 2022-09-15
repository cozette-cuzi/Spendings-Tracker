import React, { useState } from 'react';

import { FiltersWrapper, Orderings, CurrencyFilters, CurrencyButton } from '../styles/ComponentStyles';

export default function CurrencyFilter({ query, setQuery }) {
  var [currencyFilterClicked, currencyFilterClickedState] = useState('');
  function handleChange(e) {
    const { name, value } = e.target;

    setQuery({
      ...query,
      [name]: value,
    });

  }

  function changeCurrency(currency) {
    currencyFilterClickedState(currency);
    setQuery({
      ...query,
      filter: currency
    });
  }

  return (
    <>
      <FiltersWrapper>
        <Orderings>
          <select name='orderBy'
            value={query.orderBy}
            onChange={handleChange}
          >
            <option value='-date'>Sort by Date descending (default)</option>
            <option value='date'>Sort by Date ascending</option>
            <option value='-amount'>Sort by Amount descending</option>
            <option value='amount'>Sort by Amount ascending</option>
          </select>
        </Orderings>
        <CurrencyFilters>
          <li>
            <CurrencyButton
              name=''
              currencyFilter={currencyFilterClicked}
              onClick={() => changeCurrency('')}
            >
              ALL
            </CurrencyButton>
          </li>
          <li>
            <CurrencyButton
              name='HUF'
              currencyFilter={currencyFilterClicked}
              onClick={() => changeCurrency('HUF')}
            >
              HUF
            </CurrencyButton>
          </li>
          <li>
            <CurrencyButton
              name='USD'
              currencyFilter={currencyFilterClicked}
              onClick={() => changeCurrency('USD')}
            >
              USD
            </CurrencyButton>
          </li>
        </CurrencyFilters>
      </FiltersWrapper>
    </>
  );
}
