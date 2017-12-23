import ReactDOM from 'react-dom';
import React from 'react';

const UserForm = require('./components/UserForm.jsx');

ReactDOM.render(
  <UserForm name="" age="0" />,
  document.getElementById('app'),
);
