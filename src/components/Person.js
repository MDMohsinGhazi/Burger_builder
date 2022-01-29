import React, { Component } from "react";
import AuthContext from "./authContext";

class Person extends Component {
  static contextType = AuthContext;
  componentDidMount() {
    console.log(this.context.authenticated);
  }
  render() {
    console.log("[person.js] rendring");
    return (
      <div className="bg-gray-400 w-56 p-5 m-5 shadow-sm shadow-black relative">
        {this.context.authenticated ? (
          <p>Authanticated</p>
        ) : (
          <p>Please Login</p>
        )}

        <p className="font-bold mb-2" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age}
        </p>
        <input
          onChange={this.props.change}
          className="w-24 items-center"
          type="text"
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
