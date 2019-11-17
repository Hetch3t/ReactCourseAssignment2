import React from "react";
import Validation from "./Components/Validation";
import Char from "./Components/Char";
import "./App.css";

class App extends React.Component {
  state = {
    inputString: ""
  };

  inputChangedHandler = event => {
    this.setState({
      inputString: event.target.value
    });
  };

  deleteCharHandler = (_, index) => {
    console.log(this.state);
    let stringNew = this.state.inputString.split("");
    stringNew.splice(index, 1);
    stringNew = stringNew.join("");

    this.setState({
      inputString: stringNew
    });
  };

  render() {
    let chars = "";
    if (this.state.inputString) {
      chars = (
        <div>
          {this.state.inputString.split("").map((char, index) => (
            <Char
              data={char}
              key={index}
              delete={event => this.deleteCharHandler(event, index)}
            />
          ))}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input
          onChange={event => this.inputChangedHandler(event)}
          value={this.state.inputString}
        />
        <p>Length: {this.state.inputString.length}</p>
        <Validation length={this.state.inputString.length} />
        {chars}
      </div>
    );
  }
}

export default App;
