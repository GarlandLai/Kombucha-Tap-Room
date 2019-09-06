import React from 'react';
import '../App.css';
import NavButtons from "./NavButtons";
import Header from "./Header";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavButtons/>
        <KegList/>
        <Switch>
        <Route path="/new" component={NewKegForm} />
        <Route path="/edit" component={EditKegForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
