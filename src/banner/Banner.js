import axios from "../requests/axios";
import React, { useEffect, useState } from "react";
import requests from "../requests/requests";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchRecommendedMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <header
      className="header__banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
    </header>
  );
}

export default Banner;
