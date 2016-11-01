import React, {Component} from 'react';

class Item extends Component {
  constructor(props) {
    super(props)
    this.showEmail = this.showEmail.bind(this)
  }

  componentDidMount() {
    console.log("Item componentDidMount")
  }

  showEmail() {
    alert("The email is " + this.props.email);
  }

  render() {
    console.log("Item render")
    return (
      <li
        onClick={this.showEmail}
        className="collection-item">{this.props.name}</li>
    );
  }
}
export default Item;
