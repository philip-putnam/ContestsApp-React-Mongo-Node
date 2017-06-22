import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends Component {
  state = {
    pageHeader: 'Test Header',
    contests: this.props.initialContests
  };
  componentDidMount() {
    axios.get('/api/contests')
      .then(res => {
        this.setState({
          contests: res.data.contests
        });
      })
      .catch(console.error);
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
