import React from 'react';
import '../App.css';
import NavButtons from "./NavButtons";
import Header from "./Header";
import KegList from "./KegList";
import NewKegControl from "./NewKegControl";
import EditKegForm from "./EditKegForm";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import Error404 from "./Error404";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render() {
    return (
      <div className="App">
        <NavButtons />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={AboutUs} />
            <Route path="/products" render={()=><KegList kegList={this.state.masterKegList} />} />
            <Route path="/new" render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
            <Route path="/edit" component={EditKegForm} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
