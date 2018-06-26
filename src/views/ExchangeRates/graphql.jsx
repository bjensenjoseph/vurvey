import gql from 'graphql-tag';

export const getExchangeRates =
  gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `;

export const x = 0;
