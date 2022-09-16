import React, { useState } from 'react';
import { InputStyles } from '../styles/InputStyles';
import { SelectStyles } from '../styles/SelectStyles';
import { FormErrorMessage, FormStyles, GridStyles } from '../styles/ComponentStyles';
import { FlexWrapper } from '../styles/ComponentStyles';


export default function Form({ setQuery }) {
  const [state, setState] = useState({
    description: '',
    amount: 0,
    currency: 'USD',
  });

  let [saveClicked, setSaveClicked] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    };

    setSaveClicked(true);

    if (state.amount > 0 && state.description.length) {
      fetch('http://localhost:3001/spendings', requestOptions)
        .then(response => response.json())
        .then(data => {
          setQuery({ orderBy: '-date', filter: '' });
          setState({
            description: '',
            amount: 0,
            currency: 'USD',
          });
          setSaveClicked(false);
        });
    } else {
      console.log(state.description.length == 0 && saveClicked);
    }

    event.preventDefault();


  }

  return (
    <>
      <FormStyles onSubmit={handleSubmit}>
        <InputStyles
          type='text'
          placeholder='description'
          name='description'
          value={state.description}
          onChange={handleChange}
        />

        <InputStyles
          type='number'
          placeholder='amount'
          name='amount'
          value={state.amount}
          onChange={handleChange}
        />

        <SelectStyles
          name='currency'
          value={state.currency}
          onChange={handleChange}
        >
          <option value='HUF'>HUF</option>
          <option value='USD'>USD</option>
        </SelectStyles>

        <InputStyles type='submit' value='Save' />

      </FormStyles>
      {state.description.length == 0 && saveClicked &&
        <FormErrorMessage type="description">description field is required</FormErrorMessage>
      }

      {state.amount <= 0 && saveClicked &&
        <FormErrorMessage type="amount">amount field is required</FormErrorMessage>
      }


    </>
  );
}
