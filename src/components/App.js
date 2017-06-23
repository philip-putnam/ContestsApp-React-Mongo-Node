import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends Component {
  state = {
    pageHeader: 'Test Header',
    contests: this.props.initialContests
  };
  componentDidMount() {

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

export default App;
