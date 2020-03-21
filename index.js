import React, { Component } from "react";
import ReactDOM from "react-dom";

import './src/scss/test.scss';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

export default Form;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;