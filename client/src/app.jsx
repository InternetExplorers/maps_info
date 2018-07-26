import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './Search.jsx';
import Businesshours from './Businesshours.jsx';
import Businessinfo from './Businessinfo.jsx';
import Api from '../../config.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from "react-geocode";
import GoogleMap from './Map.jsx';
import Mapinfo from './Mapinfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessHours: {},
      businessInfo: {},
      address: null,
      relativeaddress: null,
      relativedistrict: null,
      phonenumber: null,
      longitude: null,
      latitude: null,
    };
  }

  componentDidMount() {
    this.getBusinessInfo(1);
    this.getBusinessAddress(1);
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

  getBusinessAddress(ID) {
    $.ajax({
      type: 'GET',
      url: `/businesses/${ID}/business_map`,
      contentType: 'application/json',
      success: (data) => {
        const address = data[0].address;
        this.setState({
          address: address,
        });
        if (address.includes("fillmore")) {
          this.setState({
            relativeaddress: "b/t Webster St & Steiner St",
            relativedistrict: "Western Addition, Fillmore",
          });
        } else if (address.includes("hayes")) {
          this.setState({
            relativeAddress: "b/t Grove St & Fell St",
            relativedistrict: "Hayes Valley",
          });
        } else if (address.includes("valencia")) {
          this.setState({
            relativeAddress: "b/t Guerrero St & Mission St",
            relativedistrict: "Mission",
          });
        } else if (address.includes("mission")) {
          this.setState({
            relativeAddress: "b/t Valencia St & S Van Ness St",
            relativedistrict: "Mission",
          });
        } else if (address.includes("brannan")) {
          this.setState({
            relativeAddress: "b/t Townsend St & Bryant St",
            relativedistrict: "SOMA",
          });
        }
        Geocode.setApiKey(Api.KEY);
        Geocode.fromAddress(address).then(
          response => {
            const { lat, lng } = response.results[0].geometry.location;
            this.setState({
              longitude: lng,
              latitude: lat,
            })
          },
          error => {
            console.error(error);
          },
        );
      },
    });
  }

  handleSearch(searchValue) {
    console.log(searchValue)
  }
  
  render() {
    return (
      <div>
        <div style={{ width: '40%', height: 400 }}>
          <GoogleMap
            google={this.props.google}
            initialCenter={{
              lat: this.state.latitude,
              lng: this.state.longitude,
            }}
            zoom={12}
            onClick={this.onMapClicked}
            style={{ width: '45%', height: '45%', position: 'relative' }}
          />
        </div>
        <div>
          <Mapinfo phoneNumber={this.state.phonenumber} address={this.state.address} a/>
        </div>
        <div>
          
          <Businesshours businessHours={this.state.businessHours} />
          <br />
          <Businessinfo businessInfo={this.state.businessInfo} />
          <Search handleSearch={this.handleSearch.bind(this)} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
