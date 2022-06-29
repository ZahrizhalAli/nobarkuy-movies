const API_KEY = "837685425a790c3cd7988803000b79b6";

const requests = {
  fetchRecommendedMovies: `/movie/11/recommendations?api_key=${API_KEY}`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchMovie: `/movie/106912?api_key=${API_KEY}`,
  fetchSimilarMovies: `/movie/106912/similar?api_key=${API_KEY}`,
};

export default requests;
