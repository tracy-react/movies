import React, { Component } from 'react';
import { ScrollView }       from 'react-native';
import moviesApi            from '../../api/moviesApi';
import MovieItem            from './MovieItem';

export default class MovieList extends Component {
  state = {movies: []};

  async componentDidMount() {
    const movies = await moviesApi.fetchInitialMovies();
    this.setState({ movies: movies.Search });
  }

  renderMovies() {
    return this.state.movies.map((movie) =>
      <MovieItem
        key={movie.Title}
        movie={movie}
      />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderMovies()}
      </ScrollView>
    );
  }
}
