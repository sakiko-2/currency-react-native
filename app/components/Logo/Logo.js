import React, { Component } from 'react';
import { Animated, View, ImageBackground, Keyboard, Platform, Text } from 'react-native';
import styles from './styles';

const ANIMATED_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  };

  componentDidMount() {
    let showListener = 'keyboardDidShow';
    let hideListener = 'keyboardDidHide';

    this.keyboardDidShowListener = Keyboard.addListener(showListener, this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener(hideListener, this.keyboardDidHide);
  };

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  };

  keyboardDidShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATED_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATED_DURATION,
      }),
    ]).start();
  };

  keyboardDidHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATED_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATED_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    const imageStyle = [
      styles.logo,
      { width: this.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <ImageBackground
            resizeMode='contain'
            source={require('./images/background.png')}
            style={styles.backgroundImage}
          >
            <Animated.Image
              resizeMode='contain'
              source={require('./images/logo.png')}
              style={imageStyle}
            />
          </ImageBackground>
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
};

export default Logo;
