import React from 'react';
import '../App.css';
import NavButtons from './NavButtons';
import Header from './Header';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import EditKegForm from './EditKegForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import AboutUs from './AboutUs';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        // {
        //   name: 'Strawberry Blast',
        //   brand: 'Kombucha Nation',
        //   price: 6,
        //   flavor: 'Strawberry',
        //   content: 'Tart and full of flavor!',
        // },
        // {
        //   name: 'Refresh',
        //   brand: 'Kombucha Nation',
        //   price: 6,
        //   flavor: 'Watermelon',
        //   content: 'This will quench you\'re thirst like no other!',
        // },
        // {
        //   name: 'Hydrate',
        //   brand: 'Kombucha Nation',
        //   price: 6,
        //   flavor: 'Coconut',
        //   content: 'Low on electrolytes? Look no further than this 100% organic coconut water.',
        // },
      ],
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
    console.log(newMasterKegList);
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
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
