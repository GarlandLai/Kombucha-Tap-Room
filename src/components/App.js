import React from 'react';
import '../App.css';
import NavButtons from "./NavButtons";
import Header from "./Header";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";

function App() {
  return (
    <div className="App">
    <NavButtons/>
    <Header/>
    <KegList/>
    <NewKegForm/>
    <br/>
    <EditKegForm/>
    </div>
  );
}

export default App;
