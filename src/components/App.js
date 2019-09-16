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
import Admin from './Admin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      masterKegList: [
        {
          name: 'Test',
          brand: 'brand',
          price: 4,
          flavor: 'flavor',
          content: 'content',
          id: '66540ffd-5310-46ac-a506-99b73568ce53',
        },
      ],
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newKeg.formattedWaitTime = (newKeg.timeOpen).fromNow(true);
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
    console.log(newMasterKegList);
  }

  handleChangingSelectedKeg(keg) {
    this.setState({ selectedKeg: keg });
  };

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

            <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}onKegSelection=   {this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg}/>} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
