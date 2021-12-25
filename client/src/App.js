import './App.css';
import {React, useEffect, useState} from "react";
import { Route, Switch, BrowserRouter} from "react-router-dom";
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import HomePage from './HomePage';
import BlogPage from './BlogPage';

function App() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    fetch("/blogs")
    .then((r) => r.json())
    .then((blogs) => setBlogList(blogs))
}, []);

  return (
  <div className="app">
    <BrowserRouter>
      <Switch>
          <Route exact path="/" >
            <HomePage title={""}/>
          </Route>
          <Route exact path="/aboutMe" >
            <AboutMe title={"About Me"}/>
          </Route>
          <Route exact path="/blogs" >
            <BlogPage title={"My Writings"} blogList={blogList}/>
          </Route>
          <Route exact path="/portfolio" >
            <Portfolio title={"My Works"}/>
          </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
