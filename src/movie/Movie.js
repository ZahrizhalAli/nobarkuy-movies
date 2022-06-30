import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import axios from "../requests/axios";
import requests from "../requests/requests";
import { useParams } from "react-router-dom";

function Movie() {
  const { movieid } = useParams();

  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const base_api = "https://image.tmdb.org/t/p/original";
  const API_KEY = "837685425a790c3cd7988803000b79b6";
  useEffect(() => {
    async function getMovies() {
      const result = await axios.get(requests.fetchSimilarMovies);
      setMovies(result.data.results);
    }
    async function getMovie() {
      const result = await axios.get(`/movie/${movieid}?api_key=${API_KEY}`);
      setMovie(result.data);
      console.table(result.data);
    }
    getMovies();
    getMovie();
  }, []);
  return (
    <>
      <section className="gen-section-padding-3 gen-single-movie">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-12">
              <div className="gen-single-movie-wrapper style-1">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="gen-video-holder">
                      <iframe
                        width="100%"
                        height="550px"
                        src="https://www.youtube.com/embed/LXb3EKWsInQ"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="gen-single-movie-info">
                      <h2 className="gen-title">{movie?.title}</h2>
                      <div className="gen-single-meta-holder">
                        <ul>
                          <li className="gen-sen-rating">TV-PG</li>
                          <li>
                            <i className="fas fa-eye"></i>
                            <span>237 Views</span>
                          </li>
                        </ul>
                      </div>
                      <p>{movie?.overview}</p>
                      <div className="gen-after-excerpt">
                        <div className="gen-extra-data">
                          <ul>
                            <li>
                              <span>Language :</span>
                              <span>{movie?.original_language}</span>
                            </li>

                            <li>
                              <span>Rating:</span>
                              <span>{movie?.vote_average}</span>
                            </li>
                            <li>
                              <span>Genre :</span>
                              {movie.genres &&
                                movie.genres.map((mg, i) => {
                                  return (
                                    <span>
                                      <a href="action.html">{mg.name}, </a>
                                    </span>
                                  );
                                })}

                              <span>
                                <a href="adventure.html">Documentary </a>
                              </span>
                            </li>
                            <li>
                              <span>Run Time :</span>
                              <span>{movie?.runtime} min</span>
                            </li>
                            <li>
                              <span>Release Date :</span>
                              <span>{movie?.release_date}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="gen-socail-share">
                          <h4 className="align-self-center">Social Share :</h4>
                          <ul className="social-inner">
                            <li>
                              <a href="#" className="facebook">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="facebook">
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="facebook">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="pm-inner">
                      <div className="gen-more-like">
                        <h5 className="gen-more-title">More Like This</h5>
                        <div className="row">
                          {movies &&
                            movies.map((m, i) => {
                              return (
                                <MovieItem
                                  key={i}
                                  title={m.title}
                                  movie_id={m.id}
                                  poster_path={`${base_api}${m.backdrop_path}`}
                                  vote_average={m.vote_average}
                                />
                              );
                            })}
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="gen-load-more-button"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment-respond">
            <h3 className="comment-reply-title">Write a Reply or Comment </h3>
            <div className="row">
              <div className="col-lg-12">
                <form>
                  <p>Type your review here.</p>
                  <div className="row">
                    <div className="col-xl-12">
                      <p className="comment-form-comment">
                        <textarea
                          rows="6"
                          cols="60"
                          placeholder="Enter Your Comment"
                        ></textarea>
                      </p>
                    </div>
                  </div>
                  <input type="submit" value="Post comment" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Movie;
