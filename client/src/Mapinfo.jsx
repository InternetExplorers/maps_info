import React from 'react';

class Mapinfo extends React.Component {
  render() {
    return (
      <div>
        <span className="address-box">
          <b>
          {this.props.address}
          </b>
          <br />
          {this.props.relativeAddress}
          <br />
          {this.props.relativeDistrict}
          <br />
        </span>
        <span className="get-direction">
        Get Directions
        <br />
        </span>
        <span className="phone-number">
        {this.props.phoneNumber}
        </span>
      </div>
    )
  }
}

export default Mapinfo;
