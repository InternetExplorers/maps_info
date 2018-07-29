import React from 'react';

export default class Mapinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currenturl: this.props.initialurl,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //todo
  }

  render() {
    const {
      phoneNumber, address, relativeAddress,
      relativeDistrict, url, initialurl,
    } = this.props;
    return (
      <div>
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
        <span className="phone-number" value={phoneNumber} onChange={this.handleChange}>
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