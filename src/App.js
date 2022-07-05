import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Banner from './banner/Banner';
import RowContainer from './rows/RowContainer';
import Movie from './movie/Movie';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <RowContainer />
            </>
          }
        />
        <Route path="/movie/:movieid" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
