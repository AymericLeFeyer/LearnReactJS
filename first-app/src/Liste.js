import React, { Component } from "react";

class Liste extends Component {
  state = {
    liste: [
      { id: 0, name: "Salut" },
      { id: 1, name: "Bonsoir" },
    ],
    newThing: '',
  };

  onEditAddThing = (event) => {
    const value = event.currentTarget.value;
    this.setState({ newThing: value });
  };

  onSubmitThing = (event) => {
    event.preventDefault();
    const tab = [...this.state.liste];
    tab.push({id: new Date().getTime(), name: this.state.newThing});
    this.setState({ liste: tab, newThing: ''});

  };

  onDeleteThing = id => {
      const tab = [...this.state.liste];
      const index = tab.findIndex(tab => tab.id === id);
      tab.splice(index, 1);
      this.setState({ liste: tab});

  }


  render() {
    return (
      <div>
        <h1>Liste de trucs</h1>
        <ul>
          {this.state.liste.map((thing) => (
            <li>
              {thing.name} <button onClick={() => this.onDeleteThing(thing.id)}>x</button>
            </li>
          ))}
        </ul>
        <form>
          <input
            type="text"
            placeholder="Nouveau truc"
            value={this.state.newThing}
            onChange={this.onEditAddThing}
          ></input>
          <button onClick={this.onSubmitThing}>Ajouter</button>
        </form>
      </div>
    );
  }
}

export default Liste;
