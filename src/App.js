import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetails/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import DashBoard from "./components/Admin/DashBoard";
import Login from "./components/Admin/Login";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header></Header>
          
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/car/:carId" element={<MovieDetail />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/admin" element={<DashBoard/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
            
          </div>
        </Router>
        <Footer  /> 
      </div>
     
    </>
  );
}

export default App;
