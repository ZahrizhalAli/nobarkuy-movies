import React from "react";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import Rows from "./rows/Rows";
import requests from "./requests/requests";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Rows fetchType={requests.fetchTopRated} category="Top Rated Movies" />

      <Rows fetchType={requests.fetchPopularMovies} category="Popular Movies" />
      <Rows
        fetchType={requests.fetchRecommendedMovies}
        category="Recommended Movies"
      />
    </div>
  );
}

export default App;
