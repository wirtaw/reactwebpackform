import React from 'react';

class NameField extends React.Component {
  constructor(props) {
    super(props);
    const isValid = this.validate(props.value);
    this.state = {value: props.value, valid: isValid};
    this.onChange = this.onChange.bind(this);
  }
  validate(val){
    return val.length > 2;
  }
  onChange(e) {
    const val = e.target.value;
    console.log(val);
    const valid = this.validateName(val);
    this.setState({name: val, nameValid: valid});
  }
  render() {
    const color = (this.state.valid === true) ? 'green' : 'red';
    return (
        <p>
          <label>Имя:</label><br />
          <input type="text" value={this.state.value} onChange={this.onChange} style={{borderColor:color}} />
        </p>
      );
  }
}

module.exports = NameField;