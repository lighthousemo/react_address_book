import React, {Component} from 'react';
import Item from './Item.jsx';

class Nav extends Component {
  componentDidMount() {
    console.log("Nav componentDidMount")
  }

  render() {
    console.log("Nav render")
    return (
      <aside className="left-sidebar">
        <ul className="collection">
          {this.props.contacts.map((contact) => {
            return <Item
              key={contact.id}
              name={contact.name}
              email={contact.email}
              contactId={contact.id} />
          })
          }
        </ul>
      </aside>
    );
  }
}
export default Nav;
