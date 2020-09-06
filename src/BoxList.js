import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.addBox = this.addBox.bind(this);
  }

  addBox(newBox) {
    this.setState({ boxes: [...this.state.boxes, newBox] });
  }

  render() {
    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        {this.state.boxes.map((box) => (
          <Box height={box.height} width={box.width} color={box.color} />
        ))}
      </div>
    );
  }
}

export default BoxList;
