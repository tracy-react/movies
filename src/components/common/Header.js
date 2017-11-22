import React, { Component }       from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes                  from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    headerText: PropTypes.string.isRequired
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Movies</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    height: 60,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

