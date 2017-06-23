import React, { Component } from 'react';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends Component {
  state = {
    pageHeader: 'Test Header',
    contests: this.props.initialContests
  };
  componentDidMount() {

  }
  fetchContest = (contestId) => {
    pushState(
      { currentContestId: contestId },
      `/contest/${contestId}`
    );
  };

  render() {
    return (
      <div>
        <div className='app'>
          <Header message={this.state.pageHeader} />
          <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} />
        </div>
      </div>
    );
  }
}

export default App;
