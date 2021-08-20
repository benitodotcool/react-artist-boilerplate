import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Works from './Pages/Works';
import About from './Pages/About';

const App = () => {

  return (
    <Router>
      <div className="container__all">
      <Header />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/works" exact><Works /></Route>
          <Route path="/about" exact><About /></Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
