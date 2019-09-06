import React from 'react';
import '../App.css';
import NavButtons from "./NavButtons";
import Header from "./Header";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";


function App() {
  return (
    <div className="App">
      <NavButtons />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/products" component={KegList} />
          <Route path="/new" component={NewKegForm} />
          <Route path="/edit" component={EditKegForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
