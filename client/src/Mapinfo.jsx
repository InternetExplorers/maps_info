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
        <span className="address-box">
          <b>
          {address}
          </b>
          <br />
          {relativeAddress}
          <br />
          {relativeDistrict}
          <br />
        </span>
        <span className="get-direction">
        Get Directions
        <br />
        </span>
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
    )
  }
}

Mapinfo.propTypes = {
  phoneNumber: PropTypes.any.isRequired,
};