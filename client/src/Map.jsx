import React from 'react';
import ReactDOM from 'react-dom';
import Api from '../../config.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class googleMap extends React.Component {
  render() {
    return (
      <div className='Map'>
        <Map 
          google={this.props.google}
          zoom={this.props.zoom}
          initialCenter={this.props.initialCenter}
          style={this.props.style}
        >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (Api.KEY),
})(googleMap);