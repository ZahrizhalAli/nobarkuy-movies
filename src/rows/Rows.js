import React from "react";
import Row from "./Row.js";

function Rows() {
  return (
    <>
      <section className="gen-section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h4 className="gen-heading-title">All Time Hits</h4>
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
                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-6.jpg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_className wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  ></button>
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt"></i>
                                  <ul className="submenu">
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
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus"></i>
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a
                                href="single-movie.html"
                                className="gen-button"
                              >
                                <i className="fa fa-play"></i>
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">machine war</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1h 22mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-7.jpg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_className wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  ></button>
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt"></i>
                                  <ul className="submenu">
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
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus"></i>
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a
                                href="single-movie.html"
                                className="gen-button"
                              >
                                <i className="fa fa-play"></i>
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">the horse lady</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 24 mins</li>
                                <li>
                                  <a href="drama.html">
                                    <span>Drama</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-8.jpg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_className wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  ></button>
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt"></i>
                                  <ul className="submenu">
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
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus"></i>
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a
                                href="single-movie.html"
                                className="gen-button"
                              >
                                <i className="fa fa-play"></i>
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">
                                  Ship of full moon
                                </a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 35mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-9.jpg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_className wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  ></button>
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt"></i>
                                  <ul className="submenu">
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
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus"></i>
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a
                                href="single-movie.html"
                                className="gen-button"
                              >
                                <i className="fa fa-play"></i>
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">
                                  Rebuneka the doll
                                </a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 44 mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-4.jpg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_className wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  ></button>
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt"></i>
                                  <ul className="submenu">
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
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus"></i>
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a
                                href="single-movie.html"
                                className="gen-button"
                              >
                                <i className="fa fa-play"></i>
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">thieve the bank</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>30min</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-8.jpg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_className wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  ></button>
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt"></i>
                                  <ul className="submenu">
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
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus"></i>
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a
                                href="single-movie.html"
                                className="gen-button"
                              >
                                <i className="fa fa-play"></i>
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">
                                  Ship of full moon
                                </a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 35mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-11.jpg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_className wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  ></button>
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt"></i>
                                  <ul className="submenu">
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
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus"></i>
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a
                                href="single-movie.html"
                                className="gen-button"
                              >
                                <i className="fa fa-play"></i>
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">the giant ship</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1h 02 mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-12.jpg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_className wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  ></button>
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt"></i>
                                  <ul className="submenu">
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
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus"></i>
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a
                                href="single-movie.html"
                                className="gen-button"
                              >
                                <i className="fa fa-play"></i>
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">
                                  common man’s idea
                                </a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 51 mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                      <div className="gen-carousel-movies-style-2 movie-grid style-2">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img
                              src="images/background/asset-13.jpg"
                              alt="owl-carousel-video-image"
                            />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_className wp_ulike_is_not_liked">
                                  <button
                                    type="button"
                                    className="wp_ulike_btn wp_ulike_put_image"
                                  ></button>
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt"></i>
                                  <ul className="submenu">
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
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a
                                  className="dropdown-toggle"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa fa-plus"></i>
                                </a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a
                                        className="login-link"
                                        href="register.html"
                                      >
                                        Sign in to add this movie to a playlist.
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a
                                href="single-movie.html"
                                className="gen-button"
                              >
                                <i className="fa fa-play"></i>
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3>
                                <a href="single-movie.html">the jin’s friend</a>
                              </h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1hr 42 mins</li>
                                <li>
                                  <a href="action.html">
                                    <span>Action</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
