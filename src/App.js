import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import "./App.css";

function App(){
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/movie_2020_08/" exact={true} component={Home}/>
      <Route path="/movie_2020_08/about" component={About} />
      <Route path="/movie_2020_08/movie/:id" component={Detail}></Route>
    </BrowserRouter>
  );
}

export default App;