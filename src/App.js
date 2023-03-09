import { createBrowserHistory } from "history";
import React, { useState } from "react";
import { BrowserRouter as Router , Link, Route , Switch } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import { Data, PopUp , Users } from "./components/Users";
import DataProvider from "./context/DataProvider";
import { Provider } from 'react-redux'
import store from "./store";


const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
 
  return (
    <>
    <Provider store={store}>
    <DataProvider>
    <Router>
    <Link to="/posts" style={{margin:'10px', fontSize:'50px'}}>posts</Link>
    <Link to="/users" style={{margin:'10px', fontSize:'50px'}}>users</Link>
      <Switch>
       <Route exact path={'/posts'} component={Posts}/>
       <Route exact path={'/users'} component={Users}/>
       <Route exact path={'/data'} component={Data}/>
       <Route exact path={'/popup'} component={PopUp}/>
      </Switch>
    </Router>
    </DataProvider>
    </Provider>
    
    </>
  );
}

export default App;
