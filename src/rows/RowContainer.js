import React from "react";
import Rows from "./Rows";
import requests from "../requests/requests";
function RowContainer() {
  return (
    <>
      <Rows fetchType={requests.fetchTopRated} category="Top Rated Movies" />

      <Rows fetchType={requests.fetchPopularMovies} category="Popular Movies" />
      <Rows
        fetchType={requests.fetchRecommendedMovies}
        category="Recommended Movies"
      />
    </>
  );
}

export default RowContainer;
