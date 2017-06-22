import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData';

export default class App extends Component {
  state = {
    pageHeader: 'Test Header',
    contests: []
  };

  componentDidMount() {
    this.setState({
      contests: data.contests
    });
  }

  render() {
    return (
      <div>
        <div className='app'>
          <Header message={this.state.pageHeader} />
        </div>
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}
