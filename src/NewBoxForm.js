import React, { Component } from 'react';
import './Form.css';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: '', width: '', color: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addBox(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            value={this.state.height}
            onChange={this.handleChange}
            name="height"
          />
        </div>

        <div>
          <label htmlFor="width">Width:</label>
          <input
            type="text"
            id="width"
            value={this.state.width}
            onChange={this.handleChange}
            name="width"
          />
        </div>

        <div>
          <label htmlFor="color">Background Color:</label>
          <input
            type="text"
            id="color"
            value={this.state.color}
            onChange={this.handleChange}
            name="color"
          />
        </div>
        <button>Add a box</button>
      </form>
    );
  }
}

export default NewBoxForm;
