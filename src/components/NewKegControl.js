import React from 'react';
import AdminConfirmation from './AdminConfirmation';
import NewKegForm from './NewKegForm';


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
        currentlyVisibleContent = <NewKegForm />;
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

export default NewKegControl;
