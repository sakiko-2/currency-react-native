export const REVERSE_CURRENCY = 'REVERSE_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';

export const reverseCurrency = () => ({
  type: 'REVERSE_CURRENCY',
});

export const changeCurrencyAmount = amount => ({
  type: 'CHANGE_CURRENCY_AMOUNT',
  amount: parseFloat(amount),
});
