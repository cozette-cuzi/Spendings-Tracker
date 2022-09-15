import React, { useState } from 'react';
import Form from './components/Form';
import FiltersAndOrderings from './components/FiltersAndOrderings';
import SpendingList from './components/SpendingList';
import Layout from './components/Layout';

export default function App() {
  const [spendings, setSpendings] = useState([]);
  const [query, setQuery] = useState({
    orderBy: '-date',
    filter: ''
  });
  return (
    <>
      <Layout>
        <Form  setQuery={setQuery} />
        <FiltersAndOrderings
          query={query}
          setQuery={setQuery}
        />
        <SpendingList
          spendings={spendings}
          setSpendings={setSpendings}
          query={query}
        />
      </Layout>
    </>
  );
}
