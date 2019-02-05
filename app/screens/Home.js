import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'NZD';
const TEMP_QUOTE_CURRENCY = 'JPY';
const TEMP_BASE_PRICE = '1';
const TEMP_QUOTE_PRICE = '75.68';

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

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
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
        <View />
      </Container>
    );
  };
};

export default Home;
