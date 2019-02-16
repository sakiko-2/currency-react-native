import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { reverseCurrency, changeCurrencyAmount } from '../actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.object,
    primaryColor: PropTypes.string,
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  };

  handleTextChange = (text) => {
    this.props.dispatch(changeCurrencyAmount(text));
  };

  handleReverseCurrency = () => {
    this.props.dispatch(reverseCurrency());
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  };

  render() {
    let quotePrice = '...';
    if (!this.props.isFetching) {
      quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    }

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle='light-content' />
        <Header onPress={this.handleOptionsPress} />
        <Logo tintColor={this.props.primaryColor} />
        <InputWithButton
          buttonText={this.props.baseCurrency}
          onPress={this.handlePressBaseCurrency}
          defaultValue={this.props.amount.toString()}
          keyboardType='numeric'
          onChangeText={this.handleTextChange}
          textColor={this.props.primaryColor}
        />
        <InputWithButton
          buttonText={this.props.quoteCurrency}
          onPress={this.handlePressQuoteCurrency}
          value={quotePrice}
          keyboardType='numeric'
          editable={false}
          textColor={this.props.primaryColor}
        />
        <KeyboardAvoidingView />
        <LastConverted
          base={this.props.baseCurrency}
          quote={this.props.quoteCurrency}
          conversionRate={this.props.conversionRate}
          date={this.props.lastConvertedDate}
        />
        <ClearButton
          text={'Reverse Currency'}
          onPress={this.handleReverseCurrency}
        />
      </Container>
    );
  };
};

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    primaryColor: state.theme.primaryColor,
  }
};

export default connect(mapStateToProps)(Home);
