import './App.css';
import { Route, Switch, BrowserRouter} from "react-router-dom";
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import HomePage from './HomePage';
import BlogPage from './BlogPage';

function App() {
  return (
  <div className="full-height">
    <BrowserRouter>
      <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/aboutMe" >
            <AboutMe />
          </Route>
          <Route exact path="/blogs" >
            <BlogPage />
          </Route>
          <Route exact path="/portfolio" >
            <Portfolio/>
          </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
