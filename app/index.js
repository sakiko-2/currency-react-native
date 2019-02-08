import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Themes from './screens/Themes';

EStyleSheet.build({
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGrey: '#f0f0f0',
  $primaryBlue: '#13b5ea',
  $primaryPink: '#fedbd0',
  $primaryPurple: '#ede1fd',
  $primaryYellow: '#ffcf44',
  $primaryGreen: '#41af4b',
  $white: '#fff',
  $darkText: '#343434',
});

export default () => <Themes />;
