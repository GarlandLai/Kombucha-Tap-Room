import React from 'react';
import AdminConfirmation from './AdminConfirmation';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false
      };
      this.handleAdminConfirmation = this.handleAdminConfirmation.bind(this);
    }

    handleAdminConfirmation() {
      this.setState({formVisibleOnPage: true});
    }

    render(){
      let currentlyVisibleContent = null;
      if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
      } else {
        currentlyVisibleContent = <AdminConfirmation onAdminConfirmation={this.handleAdminConfirmation}/>;
      }
      return (
        <div>
          {currentlyVisibleContent}
        </div>
      );
    }
  }

  NewKegControl.propTypes = {
    onNewKegCreation: PropTypes.func
  }

export default NewKegControl;
