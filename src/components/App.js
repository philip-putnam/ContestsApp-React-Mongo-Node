import React, { Component } from 'react';
import Header from './Header';
import ContestList from './ContestList';

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
          <ContestList contests={this.state.contests} />
        </div>
      </div>
    );
  }
}

export default App;
