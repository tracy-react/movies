import React, { Component }  from 'react';
import { Text, Image,
  View, StyleSheet,
  Linking }                  from 'react-native';
import PropTypes             from 'prop-types';
import Card                  from '../card/Card';
import CardItem              from '../card/CardItem';
import Button                from '../common/Button';
import moviesApi             from '../../api/moviesApi';


class MovieItem extends Component {
  static propTypes = {
    initialMovieData: PropTypes.object.isRequired
  };

  state = {
    movie: this.props.initialMovieData
  };

  // TODO API has some errors - return promise for some movies instead of objects

  // async componentDidMount() {
  //   const { imdbID } = this.state.movie;
  //   const fullMovieData = moviesApi.fetchMovieDetail(imdbID);
  //   this.setState({ movie: fullMovieData });
  // }

  render() {
    const { movie } = this.state;
    const { Poster, Title, Year } = movie;
    const {
      headerImageContainer,
      headerImage,
      headerTextContainer,
      headerText,
      centerImage
    } = styles;

    //console.warn(moviesApi.fetchMovieDetail(this.state.movie.imdbID));
    console.warn(movie);

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
        {
          movie.Website && (
            <CardItem>
              <Button handlePress={this.handlePress}/>
            </CardItem>
          )
        }
      </Card>
    );
  }
}

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

export default MovieItem;
