import React from 'react';
import Row from './Row';

export default class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom'
    }
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (          
          <section>
            <h1>***React Class Demo***</h1>
            <Row label="Name">
              <input
                value={this.state.name}
                onChange={this.handleNameChange} />
            </Row>
           
          </section>
    );
  }
}