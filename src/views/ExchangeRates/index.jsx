import React from 'react';
import { Query } from 'react-apollo';
import { getExchangeRates } from './graphql';

const ExchangeRates = () => (
  <Query query={getExchangeRates}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default ExchangeRates;
