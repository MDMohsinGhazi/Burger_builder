import React, { Component } from "react";
import Persons from "./components/Persons";
import Cockpit from "./components/Cockpit";
import AuthContext from "./components/authContext";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constractur");
    this.state = {
      person: [
        { id: 1, name: "Max", age: 28 },
        { id: 2, name: "Mohsin", age: 25 },
        { id: 3, name: "Ghazi", age: 21 },
      ],
      otherState: "Some other value",
      showPerson: false,
      showCockpit: true,
      counter: 0,
      isLogin: false,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedStateFromProps");
    return state;
  }
  componentDidMount() {
    console.log("component did mounf reandering");
  }

  TogglerHandler = () => {
    this.setState({ showPerson: !this.state.showPerson });
  };

  deletePersonHandler = (index) => {
    const newPerson = [...this.state.person];
    newPerson.splice(index, 1);
    this.setState({ person: newPerson });
  };
  nameChangHandler = (evt, id) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.person[personIndex] };
    person.name = evt.target.value;

    const newPerson = [...this.state.person];
    newPerson[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        person: newPerson,
        counter: prevState.counter + 1,
      };
    });
  };

  authinticationHandler = () => {
    this.setState({ isLogin: true });
  };
  render() {
    console.log("[App.js Rendering]");
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            person={this.state.person}
            click={this.deletePersonHandler}
            change={this.nameChangHandler}
          />
        </div>
      );
    }
    return (
      <div className="flex flex-col justify-center items-center">
        <button
          className="p-5 m-5 bg-red-700 text-white"
          onClick={() =>
            this.setState({ showCockpit: !this.state.showCockpit })
          }
        >
          Remove cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.isLogin,
            login: this.authinticationHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              toggler={this.TogglerHandler}
              showPerson={this.state.showPerson}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
