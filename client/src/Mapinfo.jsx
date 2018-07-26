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
        Get Directions
        <br />
        {this.props.phoneNumber}
      </div>
    )
  }
}

export default Mapinfo
