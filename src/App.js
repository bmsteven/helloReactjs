import React from "react";
import "./App.css";



class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  
  render() {
    return (
      <div>
        <p>{this.state.time}</p>
      </div>
    );
  }
}


class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me" >
        <p>Hello world...</p>
        <p>I am {this.props.name}</p>
        <p>A JavaScript Developer by Day</p>
        <p>A Tech Business Consulatant by Night</p>
        <Clock/>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <AboutMe name={"Justine"} />
    </div>
  );
}

export default App;

