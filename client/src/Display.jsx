import React, {Component} from 'react';

class Display extends Component {
  componentDidMount() {
    console.log("Display componentDidMount")
  }

  render() {
    console.log("Display render")
    return (
      <main className="main">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Minnie Mouse</span>
            <img className="circle contact-image" src="http://images.clipartpanda.com/pink-minnie-mouse-clip-art-7ca5nbkcA.jpeg"></img>
            <p>minnie@gmail.com</p>
          </div>
          <div className="card-action">
            <a href="#">Delete</a>
          </div>
        </div>
      </main>
    );
  }
}
export default Display;
