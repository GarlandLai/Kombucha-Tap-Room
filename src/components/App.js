import React from 'react';
import '../App.css';
import NavButtons from "./NavButtons";
import Header from "./Header";
import KegList from "./KegList";

function App() {
  return (
    <div className="App">
    <NavButtons/>
    <Header/>
    <KegList/>
    </div>
  );
}

export default App;
