import React from 'react';

class AgeField extends React.Component {
  constructor(props) {
    super(props);
    const isValid = this.validate(props.value);
    this.state = {value: props.value, valid: isValid};
    this.onChange = this.onChange.bind(this);
  }
  validate(val) {
    return val >= 0;
  }
  onChange(e) {
    const val = e.target.value;
    const valid = this.validateAge(val);
    this.setState({age: val, ageValid: valid});
  }
  render() {
      const color = (this.state.valid === true) ? 'green' : 'red';
      return (<p>
          <label>Возраст:</label><br />
          <input type="number" value={this.state.value} onChange={this.onChange} style={{borderColor:color}} />
      </p>);
  }
}

module.exports = AgeField;
