import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'NZD';
const TEMP_QUOTE_CURRENCY = 'JPY';
const TEMP_BASE_PRICE = '1';
const TEMP_QUOTE_PRICE = '75.68';
const TEMP_CONVERSION_DATE = Date();
const TEMP_CONVERSION_RATE = 75.68;

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base');
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote');
  };

  handleTextchange = (text) => {
    console.log('text change', text);
  };

  handleReverseCurrency = () => {
    console.log('press reverse currency');
  };

  handleOptionsPress = () => {
    console.log('press options');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <Header onPress={this.handleOptionsPress} />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType='numeric'
          onChangeText={this.handleTextchange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          defaultValue={TEMP_QUOTE_PRICE}
          keyboardType='numeric'
          editable={false}
        />
        <KeyboardAvoidingView />
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          conversionRate={TEMP_CONVERSION_RATE}
          date={TEMP_CONVERSION_DATE}
          rate={TEMP_CONVERSION_RATE}
        />
        <ClearButton
          text={'Reverse Currency'}
          onPress={this.handleReverseCurrency}
        />
      </Container>
    );
  };
};

export default Home;
