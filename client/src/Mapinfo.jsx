import React from 'react';
import PropTypes from 'prop-types';

export default class Mapinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currenturl: this.props.initialurl,
    };
  }

  render() {
    const {
      phoneNumber, address, relativeAddress,
      relativeDistrict, url, initialurl,
    } = this.props;
    return (
      <div className="main-map-info">
        <span>
          <div className="address-1">
          <b>
          {address}
          </b>
          </div>
          <div className="relative-address">
          {relativeAddress}
          </div>
          <div className="relative-district">
          {relativeDistrict}
          </div>
        </span>
        <div className="get-direction">
        Get Directions
        </div>
        <span className="phone-number">
        {phoneNumber}
        <br />
        </span>
        <span className="url">
        {url}
        <br />
        </span>
        <span className="send-to-phone">
        Send to your Phone
        </span>
      </div>
    );
  }
}

Mapinfo.propTypes = {
  phoneNumber: PropTypes.any.isRequired,
};