import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

export default class App extends Component {
  state = {
    pageHeader: 'Test Header'
  };

  render() {
    return (
      <div>
        <div className='app'>
          <Header message={this.state.pageHeader} />
        </div>
        <div>
          {this.props.contests.map(contest =>
            <ContestPreview {...contest} />
          )}
        </div>
      </div>
    );
  }
}
