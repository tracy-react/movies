import React                  from 'react';
import { View, StyleSheet }   from 'react-native';

const CardItem = ( props ) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fffd',
    borderBottomWidth: 1,
    borderColor: '#dadddb',
    justifyContent: 'flex-start',
    padding: 5,
    flexDirection: 'row',
    position: 'relative'
  }
});

export default CardItem;
