import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGrey: '#f0f0f0',
  $primaryBlue: '#13b5ea',
  $white: '#fff',
});

export default () => <Home />;
