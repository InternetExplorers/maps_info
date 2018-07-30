import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './Search.jsx';
import Businesshours from './Businesshours.jsx';
import Businessinfo from './Businessinfo.jsx';
import Api from '../../config.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from "react-geocode";
import Googlemap from './map.jsx';
import Mapinfo from './mapinfo.jsx';
import style from './style/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessHours: [],
      businessInfo: {},
      address: null,
      relativeaddress: null,
      relativedistrict: null,
      phonenumber: null,
      longitude: null,
      latitude: null,
      url: null,
      initialurl: 'theforesttrumpet.com',
    };
    this.handleSearch = this.handleSearch.bind(this);
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
        const businessHours = [];
        Object.entries(data[0]).forEach(([key, value]) => {
          if (key === 'mon' || key === 'tue' || key === 'wed' || key === 'thu' || key === 'fri' || key === 'sat' || key === 'sun') {
            businessHours.push({ val: value, tag: key.charAt(0).toUpperCase() + key.slice(1) });
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
          phonenumber: data[0].phone_number,
          relativeaddress: data[0].relative_location,
          relativedistrict: data[0].relative_district,
        });
        Geocode.setApiKey(Api.KEY);
        Geocode.fromAddress(address).then(
          response => {
            const { lat, lng } = response.results[0].geometry.location;
            this.setState({
              longitude: lng,
              latitude: lat,
            });
          },
          error => {
            console.error(error);
          },
        );
      },
    });
  }

  handleSearch(businessName) {
    $.ajax({
      type: 'GET',
      url: `/businesses/${businessName}`,
      contentType: 'application/json',
      success: (data) => {
        const businessID = data[0].id;
        this.getBusinessInfo(businessID);
        this.getBusinessAddress(businessID);
      },
    });
    const url = `${businessName}.com`;
    this.setState({
      url: url.replace(/\s/g, ''),
    });
  }

  render() {
    const {
      phonenumber, address, relativeaddress, relativedistrict,
      businessHours, businessInfo, longitude, latitude, url, initialurl,
    } = this.state;
    return (
      <div>
        <div className="search">
          <Search handleSearch={this.handleSearch} />
        </div>
        <div className={style.Mapbox}>
          <div className={style.GoogleMap}>
            <Googlemap
              google={this.props.google}
              initialCenter={{
                lat: latitude,
                lng: longitude,
              }}
              center={{
                lat: latitude,
                lng: longitude,
              }}
              zoom={14}
              onClick={this.onMapClicked}
              style={{ width: '286', height: '135', position: 'relative' }}
            />
          </div>
          <div className={style.MapInfo}>
            <div className={style.LeftIcons}></div>
            <Mapinfo
              phoneNumber={phonenumber}
              address={address}
              relativeAddress={relativeaddress}
              relativeDistrict={relativedistrict}
              url={url}
              initialurl={initialurl}
            />
            <div className={style.RightIcons}></div>
          </div>
        </div>
        <br />
        <div>
          <div className={style.BusinessHours}>
            <Businesshours businessHours={businessHours} />
            <br />
          </div>
          <div className={style.BusinessInfo}>
            <Businessinfo businessInfo={businessInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
