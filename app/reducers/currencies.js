import { CHANGE_CURRENCY_AMOUNT, REVERSE_CURRENCY, changeCurrencyAmount, reverseCurrency } from '../actions/currencies';

const initialState = {
  baseCurrency: 'NZD',
  quoteCurrency: 'JPY',
  amount: 1,
  conversion: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount || 0,
      }
    case REVERSE_CURRENCY:
      return {
        ...state,
        baseCurrency: state.baseCurrency,
        quoteCurrency: state.quoteCurrency,
      }
    default:
      return state;
  }
};

export default reducer;
