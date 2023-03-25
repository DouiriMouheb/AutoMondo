import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetails/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header></Header>
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/movie/:imdbID" element={<MovieDetail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
