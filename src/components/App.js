import React from 'react';
import '../App.css';
import NavButtons from './NavButtons';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import {Switch, Route } from 'react-router-dom';
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
          name: 'Strawberry Blast',
          brand: 'Kombucha Nation',
          price: 6,
          flavor: 'Strawberry',
          content: 'Tart and full of flavor!',
          id: "db70fd2d-2e0e-433b-8be5-a500d6ac5d2c",
          pints: 20,
        },
        {
          name: 'Refresh',
          brand: 'Kombucha Nation',
          price: 6,
          flavor: 'Watermelon',
          content: 'This will quench you\'re thirst like no other!',
          id: "cc70fd2d-2e01-433b-8be5-a500d6ac5d2c",
          pints: 120,
        },
        {
          name: 'Hydrate',
          brand: 'Kombucha Nation',
          price: 6,
          flavor: 'Coconut',
          content: 'Low on electrolytes? Look no further than this 100% organic coconut water.',
          id: "db70fd3d-2e0e-453b-8be5-a500d6ac5d2c",
          pints: 99,
        },
      ],
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
    console.log(newMasterKegList);
  }

  handleChangingSelectedKeg(keg) {
    this.setState({ selectedKeg: keg });
  };

  handleUpdateKeg(keg) {
    let selectedKeg = this.state.selectedKeg;
  }

  handleSell(){
    const newPints = this.state.selectedKeg.pints - 1;
  }

  render() {
    console.log(this.state.masterKegList);
    return (
      <div className='App'>
        <NavButtons />

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={AboutUs} />

            <Route path="/products" render={()=><KegList kegList={this.state.masterKegList} />} />

            <Route path='/new' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />

            <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} onKegSelection=   {this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg}
            onUpdateKeg={this.state.handleUpdateKeg} onSell={this.state.handleSell}/>} />
            <Route component={Error404} />
          </Switch>

      </div>
    );
  }
}

export default App;
