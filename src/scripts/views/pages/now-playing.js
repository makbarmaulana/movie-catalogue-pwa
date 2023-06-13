import TheMovieDBSource from '../../data/themoviedb-source';

const NowPlaying = {
  async render() {
    return `
      <h2>Now Playing Page</h2>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDBSource.nowPlayingMovies();
    console.log(movies);
  },
};

export default NowPlaying;
