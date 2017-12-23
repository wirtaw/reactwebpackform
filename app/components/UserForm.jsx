import React from 'react';

const NameField = require('./NameField.jsx');
const AgeField = require('./AgeField.jsx');

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.nameField.state.value;
    const age = this.refs.ageField.state.value;
    if(this.refs.nameField.state.valid && this.refs.ageField.state.valid) {
      alert("Имя: " + name + " Возраст: " + age);
    }
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <NameField value="" ref="nameField" />
          <AgeField value="5" ref="ageField" />
          <input type="submit" value="Отправить" />
        </form>
    );
  }
}

module.exports = UserForm;
