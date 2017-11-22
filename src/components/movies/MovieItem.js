import React                 from 'react';
import { Text, Image,
  View, StyleSheet,
  Linking }                  from 'react-native';
import PropTypes             from 'prop-types';
import Card                  from '../card/Card';
import CardItem              from '../card/CardItem';
import Button                from '../common/Button';

const MovieItem = ({ movie }) => {
  const { Poster, Title, Year } = movie;
  const {
    headerImageContainer,
    headerImage,
    headerTextContainer,
    headerText,
    centerImage
  } = styles;

  return (
    <Card>
      <CardItem>
        <View style={headerImageContainer}>
          <Image
            style={headerImage}
            source={{ uri: Poster  }}
          />
        </View>
        <View style={headerTextContainer}>
          <Text style={headerText}>{Title}</Text>
          <Text>{Year}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image
          style={centerImage}
          source={{ uri: Poster }}
        />
      </CardItem>
      <CardItem>
        <Button
          buttonText={'See More'}
          handlePress={() => Linking.openURL(`http://www.imdb.com/search/text?realm=title&field=plot&q=${Title}`)}
        />
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerImage: {
    width: 50,
    height: 50
  },
  headerText: {
    fontSize: 17
  },
  centerImage: {
    height: 300,
    flex: 1,
    width: null
  }
});

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieItem;
