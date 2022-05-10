import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchData } from "./config/fetchData";
import DataContext from "./config/dataContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import "./styles/reset.scss";

const App = () => {
  const [works, setWorks] = useState([]);
  const [isWorksIsLoaded, setIsWorksLoaded] = useState(false);
  const [tags, setTags] = useState([]);
  const [isTagsLoaded, setIsTagsLoaded] = useState(false);

  // Boolean value to check if all data is loaded
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);

  // All fetch functions
  useEffect(() => {
    fetchData(setWorks, "works", setIsWorksLoaded);
    fetchData(setTags, "tags", setIsTagsLoaded);
  }, []);

  // Check if all data is loaded
  useEffect(() => {
    if (isWorksIsLoaded === true && isTagsLoaded === true) {
      setIsAllDataLoaded(true);
    }
  }, [isWorksIsLoaded, isTagsLoaded]);

  return (
    <DataContext.Provider
      value={{
        works: works,
        tags: tags,
        isAllDataLoaded: isAllDataLoaded
      }}
    >
      <Router>
        <div className="wrapper__application">
          <div className="container__application">
            <Header />
            <div className="wrapper__switch--main">
              <Switch>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/works" exact render={() => <Works works={works} tags={tags} />} />
                <Route path="/works:queryParams" render={() => <Works works={works} tags={tags} />} />
                <Route path="/contact" render={() => <Contact />} />
                <Route path="*" render={() => <Error404 />} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </DataContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
