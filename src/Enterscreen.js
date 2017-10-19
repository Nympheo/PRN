import React from 'react';
import Login from './Login';

/**
 * A counter button: tap the button to increase the count.
 */
class Enterscreen extends React.Component {
  constructor() {
    super();
    this.state = {
      nextScreen: [],
    };
  }

  componentDidMount() {
    this.setState({nextScreen: [<Login/>]});
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        {this.state.nextScreen.shift()}
      </div>
    )
  }
}

export default Enterscreen;
