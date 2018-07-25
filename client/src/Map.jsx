import React from 'react';
import ReactDOM from 'react-dom';
import Api from '../../config.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class googleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
   render() {
    return (
      <div className='Map'>
        <Map google={this.props.google} zoom={this.props.zoom}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>GOOGLE MAP H1</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: (Api.KEY),
})(googleMap);
