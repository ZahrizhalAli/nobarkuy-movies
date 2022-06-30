import React, { useState, useEffect } from "react";
import Row from "./Row.js";
import axios from "../requests/axios";

function Rows({ fetchType, category }) {
  const [movies, setMovies] = useState([]);
  const base_api = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchMovies() {
      const result = await axios.get(fetchType);
      setMovies(result.data.results);
      // console.log(result.data.results);
    }
    fetchMovies();
  }, [fetchType]);

  return (
    <>
      <section className="gen-section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h4 className="gen-heading-title">{category}</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
              <div className="gen-movie-action">
                <div className="gen-btn-container text-right">
                  <a
                    href="tv-shows-pagination.html"
                    className="gen-button gen-button-flat"
                  >
                    <span className="text">More Videos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="gen-style-2">
                <div
                  className="owl-carousel owl-loaded owl-drag"
                  data-dots="false"
                  data-nav="true"
                  data-desk_num="4"
                  data-lap_num="3"
                  data-tab_num="2"
                  data-mob_num="1"
                  data-mob_sm="1"
                  data-autoplay="false"
                  data-loop="false"
                  data-margin="30"
                >
                  {movies &&
                    movies.map((m, i) => {
                      return (
                        <Row
                          key={i}
                          title={m.title}
                          poster_path={`${base_api}${m.poster_path}`}
                          vote_average={m.vote_average}
                          movie_id={m.id}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rows;
