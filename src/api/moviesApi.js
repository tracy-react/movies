const dummyData = 'https://www.omdbapi.com/?apikey=d973de8b&s=funny&plot=full';
const apiHost = 'https://www.omdbapi.com/?apikey=d973de8b&';

export default {
  async fetchInitialMovies() {
    try {
      const response = await fetch(dummyData);
      const responseJson = await response.json();
      return responseJson;
    } catch (e) {
      console.error(e);
    }
  },
  async fetchMovieDetail(movieId) {
    try {
      const response = await fetch(`${apiHost}i=${movieId}&r=json`);
      const responseJson = await response.json();
      console.warn(responseJson);
      return responseJson;
    } catch (e) {
      console.error(e);
    }
  }
};
