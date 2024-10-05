import React, { Component } from 'react';
import './App.css'; // Optional: if you want to style your app

class App extends Component {

constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/test")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

  // Render method to display the component's UI
  render() {
    return (
      <div className="App">
       <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
