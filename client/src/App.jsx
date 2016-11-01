import React, {Component} from 'react';
import Nav from './Nav.jsx';
import Display from './Display.jsx';

class App extends Component {
  constructor(props) {
    console.log("App constructor")
    super(props)
    // Set the initial state of the component
    this.state = {contacts: []}
  }

  componentDidMount() {
    console.log("App componentDidMount")
    // Is for using third party libraries that
    // need access to the DOM
    //
    // Also, for AJAX requests
    $.get("http://localhost:8000/api/contacts")
    .then((contacts) => {
      // set the contacts in the state
      // calls render automatically
      this.setState({contacts: contacts})
    })
    .catch((err) => {
      alert("Could not get contacts");
    })
  }

  render() {
    console.log("App render")
    return (
      <div className="wrapper">
        <Nav contacts={this.state.contacts}/>
        <Display />
      </div>
    );
  }
}
export default App;
