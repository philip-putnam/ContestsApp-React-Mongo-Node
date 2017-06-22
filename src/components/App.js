import React, { Component } from 'react';
import Header from './Header';

export default class App extends Component {
  state = {
    pageHeader: 'Test Header'
  };

  render() {
    return (
      <div className='app'>
        <Header message={this.state.pageHeader} />
      </div>
    );
  }
}
