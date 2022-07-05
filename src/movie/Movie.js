import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';
import axios from '../requests/axios';
import requests from '../requests/requests';
import { useParams } from 'react-router-dom';
import * as tf from '@tensorflow/tfjs';
import padSequences from '../paddedSeq';
function Movie() {
  const { movieid } = useParams();

  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState('');
  const [metadata, setMetadata] = useState();
  const [model, setModel] = useState();
  const [testText, setTestText] = useState('');
  const [testScore, setScore] = useState('');
  const [trimedText, setTrim] = useState('');
  const [seqText, setSeq] = useState('');
  const [padText, setPad] = useState('');
  const [inputText, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [load, setLoad] = useState(false);

  const OOV_INDEX = 2;
  const url = {
    model:
      'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json',
    metadata:
      'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json',
  };
  const base_api = 'https://image.tmdb.org/t/p/original';
  const API_KEY = '837685425a790c3cd7988803000b79b6';

  // LOAD MODEL
  async function loadModel(url) {
    try {
      const model = await tf.loadLayersModel(url.model);
      setModel(model);
    } catch (err) {
      console.log(err);
    }
  }

  // LOAD METADATA
  async function loadMetadata(url) {
    try {
      const metadataJson = await fetch(url.metadata);
      const metadata = await metadataJson.json();
      setMetadata(metadata);
    } catch (err) {
      console.log(err);
    }
  }

  // GET SENTIMENT SCORE
  const getSentimentScore = (text) => {
    console.log(text);
    const inputText = text
      .trim()
      .toLowerCase()
      .replace(/(\.|\,|\!)/g, '')
      .split(' ');
    setTrim(inputText);
    console.log(inputText);
    const sequence = inputText.map((word) => {
      let wordIndex = metadata.word_index[word] + metadata.index_from;
      if (wordIndex > metadata.vocabulary_size) {
        wordIndex = OOV_INDEX;
      }
      return wordIndex;
    });
    setSeq(sequence);
    console.log(sequence);
    // Perform truncation and padding.
    const paddedSequence = padSequences([sequence], metadata.max_len);
    console.log(metadata.max_len);
    setPad(paddedSequence);

    const input = tf.tensor2d(paddedSequence, [1, metadata.max_len]);
    console.log(input);
    setInput(input);
    const predictOut = model.predict(input);
    const score = predictOut.dataSync()[0];
    predictOut.dispose();
    setScore(score);
    return score;
  };

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
    tf.ready().then(() => {
      loadModel(url);
      loadMetadata(url);
    });

    getMovies();
    getMovie();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoad(true);
    setResult(getSentimentScore(text));
    // console.log(result);
    setLoad(false);
  }

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
            {result == null ? (
              <h3 className="comment-reply-title">Waiting review...</h3>
            ) : result > 0.5 ? (
              <h3 className="comment-reply-title">Positive Comment</h3>
            ) : (
              <h3 className="comment-reply-title">Negative Comment</h3>
            )}
            <div className="row">
              <div className="col-lg-12">
                <form onSubmit={handleSubmit}>
                  <p>
                    Type your review here and identify wether or not your
                    comment is a positive / good or negative / bad comments
                  </p>
                  <div className="row">
                    <div className="col-xl-12">
                      <p className="comment-form-comment">
                        <textarea
                          name="comment"
                          rows="6"
                          cols="60"
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          placeholder="Enter Your Comment"
                        ></textarea>
                      </p>
                    </div>
                  </div>
                  <input type="submit" value={load ? 'Loading...' : 'Test'} />
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
