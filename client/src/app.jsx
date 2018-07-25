import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './Search.jsx';
import Businesshours from './Businesshours.jsx';
import Businessinfo from './Businessinfo.jsx';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from './Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessHours: {},
      businessInfo: {},
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
        const businessInfo = {};
        Object.entries(data[0]).forEach(([key, value]) => {
          if (value === 0) {
            businessInfo[key] = 'No';
          } else if (value === 1) {
            businessInfo[key] = 'Yes';
          }
        });
        const businessHours = {};
        Object.entries(data[0]).forEach(([key, value]) => {
          if (key === 'mon' || key === 'tue' || key === 'wed' || key === 'thu' || key === 'fri' || key === 'sat' || key === 'sun') {
            businessHours[key] = value;
          }
        });
        this.setState({
          businessHours: businessHours,
          businessInfo: businessInfo,
        });
      },
    });
  }

  // getBusinessAddress() {

  // }

  handleSearch(searchValue) {
  }
  
  render() {
    return (
      <div>
        <div style={{ width: '100%', height: 400 }}>
        <GoogleMap 
          google={this.props.google}
          initialCenter={{
            lat: 90.854885,
            lng: -88.081807
          }}
          zoom={13}
          onClick={this.onMapClicked}
        />
        </div> 
        <Search handleSearch={this.handleSearch.bind(this)} />
        <Businesshours businessHours={this.state.businessHours} />
        <br />
        <Businessinfo businessInfo={this.state.businessInfo} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
