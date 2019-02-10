import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $pink: '$primaryPink',
  $purple: '$primaryPurple',
  $green: '$primaryGreen',
  $yellow: '$primaryYellow',
});

class Themes extends Component {
  handleThemePress = (color) => {
    console.log('press theme', color);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle='default' />

        <ListItem
          text='Blue'
          handleThemePress={this.handleThemePress(styles.$blue)}
          checkmark={false}
          selected
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text='Yellow'
          handleThemePress={this.handleThemePress(styles.$yellow)}
          checkmark={false}
          selected
          iconBackground={styles.$yellow}
        />
        <Separator />
        <ListItem
          text='Pink'
          handleThemePress={this.handleThemePress(styles.$pink)}
          checkmark={false}
          selected
          iconBackground={styles.$pink}
        />
        <Separator />
        <ListItem
          text='Green'
          handleThemePress={this.handleThemePress(styles.$green)}
          checkmark={false}
          selected
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text='Purple'
          handleThemePress={this.handleThemePress(styles.$purple)}
          checkmark={false}
          selected
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  };
};

export default Themes;