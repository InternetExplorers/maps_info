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
      businessHours: [],
      businessInfo: [],
      address: [],
    };
  }

  componentDidMount() {
    this.getBusinessInfo(1);
    
  }

  getBusinessInfo(ID) {
    $.ajax({
      type: 'GET',
      url: `/businesses/${ID}/business_info`,
      contentType: 'application/json',
      success: (data) => {
        console.log("SUCESS GET", data)
      }
    });
  }

  // getBusinessAddress() {

  // }

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
