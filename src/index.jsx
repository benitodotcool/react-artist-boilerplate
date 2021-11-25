import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { fetchData } from './config/fetchData';
import DataContext from './config/dataContext';
import './styles/reset.scss';
import './index.scss';
import Header from './components/Header';
import Loader from './components/Loader';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Error404 from './pages/Error404';

const App = () => {
  const [works, setWorks] = useState([]);

  // useEffect(() => {
  //   fetchData(setWorks, "/works")
  // }, []);

  // if (works.length === 0) return <Loader />

  return (
    <DataContext.Provider
      value={{
        works: works
      }}
    >
      <Router>
        <div className="wrapper__application">
          <div className="container__application">
            <Header />
            <div className="wrapper__switch--main">
              <Switch>
                <Route path="/" exact render={() => <Redirect to="/home" />}/>
                <Route path="/home" render={() => <Home />}/>
                <Route path="/works" render={() => <Works />}/>
                <Route path="/about" render={() => <About />}/>
                <Route path="*" render={() => <Error404 />}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </DataContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
