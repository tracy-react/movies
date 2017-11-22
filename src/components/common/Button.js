import React                from 'react';
import {
  Text, StyleSheet,
  TouchableOpacity }        from 'react-native';
import PropTypes            from 'prop-types';

const Button = ({ handlePress, buttonText }) => {
  const { button, text } = styles;

  return (
    <TouchableOpacity
      style={button}
      onPress={handlePress}
    >
      <Text style={text}>
        { buttonText }
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#f9fffd',
    borderRadius: 4,
    borderColor: '#0986ff',
    borderWidth: 1,
    flex: 1,
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    alignSelf: 'center',
    color: '#0986ff',
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10
  }
});

Button.propTypes = {
  handlePress: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default Button;
