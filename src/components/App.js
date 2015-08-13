import React, {Component} from 'react';

export default class App extends Component {
  render() {
    var greeting = 'This is my app component';
    return (
      <div>
        {greeting}
      </div>
    );
  }
}
