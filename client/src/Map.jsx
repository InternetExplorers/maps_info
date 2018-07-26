import React from 'react';
import Api from '../../config.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class googleMap extends React.Component {
  render() {
    console.log(this.props.center, this.props.initialCenter)
    return (
      <div className='Map'>
        <Map 
          google={this.props.google}
          zoom={this.props.zoom}
          initialCenter={this.props.initialCenter}
          center={this.props.center}
          style={this.props.style}

        >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} 
                  position={this.props.center}
          />
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
