import React, { PureComponent } from "react";
import Person from "./Person";

class Persons extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[persons.js] shouldComponentUpdate");
  //   if (nextProps.person !== this.props.person) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate ");
    return { message: "snapshot" };
  }
  render() {
    console.log("[Person.js] rendring");
    return (
      <div className="">
        {this.props.person.map((p, i) => (
          <Person
            click={() => this.props.click(i)}
            change={(evt) => this.props.change(evt, p.id)}
            name={p.name}
            age={p.age}
            key={p.id}
            isAuth={this.props.isAuth}
          />
        ))}
      </div>
    );
  }
  componentDidUpdate() {
    console.log("[person.js] componentdidupdate");
  }
}

export default Persons;
