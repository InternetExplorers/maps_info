import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './Search.jsx';
import Businesshours from './Businesshours.jsx';
import Businessinfo from './Businessinfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  handleSearch(searchValue) {
  }
  
  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch.bind(this)} />
        <Businesshours />
        <br />
        <Businessinfo />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
