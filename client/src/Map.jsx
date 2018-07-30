import React from 'react';
import PropTypes from 'prop-types';
import Api from '../../config.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import style from './style/Map.css'

class Googlemap extends React.Component {
  render() {
    const {
      google, zoom, initialCenter,
      center, style,
    } = this.props;
    return (
      <div className={style.main_map}>
        <Map
          google={google}
          zoom={zoom}
          initialCenter={initialCenter}
          center={center}
          style={style}
        >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} 
                  position={center}
          />
          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

Googlemap.propTypes = {
  center: PropTypes.any.isRequired,
};

export default GoogleApiWrapper({
  apiKey: (Api.KEY),
})(Googlemap);
