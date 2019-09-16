import React from 'react';
import '../App.css';
import NavButtons from './NavButtons';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import NewKegControl from './NewKegControl';
import EditKegForm from './EditKegForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import AboutUs from './AboutUs';
import Error404 from './Error404';
import Moment from 'moment';
import Admin from './Admin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: null,
      masterKegList: [
        {
          name: 'Test',
        },
      ],
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newKeg.formattedWaitTime = (newKeg.timeOpen).fromNow(true);
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
    console.log(newMasterKegList);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updateKegElapsedWaitTime(),
    60000
    );
  }

  updateKegElapsedWaitTime() {
    console.log("check");
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.forEach((keg) =>
      keg.formattedWaitTime = (keg.timeOpen).fromNow(true)
    );
    this.setState({masterKegList: newMasterKegList})
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  render() {
    console.log(this.state.masterKegList);
    return (
      <div className='App'>
        <NavButtons />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={AboutUs} />


            <Route path="/products" render={()=><KegList kegList={this.state.masterKegList} />} />

            <Route path='/new' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />


            <Route path="/edit" component={EditKegForm} />
            <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}/>} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
