import React from 'react';

class Mapinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currenturl: this.props.initialurl,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("yo")
  }

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
        <span className="phone-number" value={this.props.phoneNumber} onChange={this.handleChange}>
        {this.props.phoneNumber}
        <br />
        </span>
        <span className="url">
        {this.props.url}
        <br />
        </span>
        <span className="send-to-phone">
        Send to your Phone
        </span>
      </div>
    )
  }
}

export default Mapinfo;
