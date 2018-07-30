import React from 'react';
import PropTypes from 'prop-types';
import style from './style/Mapinfo.css';

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
      <div className={style.main_map_info}>
        <span>
          <div className={style.address_1}>
          <b>
          {address}
          </b>
          </div>
          <div className={style.relative_address}>
          {relativeAddress}
          </div>
          <div className={style.relative_district}>
          {relativeDistrict}
          </div>
        </span>
        <span className={style.get_direction}>
        Get Directions
        </span>
        <span className={style.phone_number}>
        {phoneNumber}
        <br />
        </span>
        <span className={style.url}>
        {url}
        <br />
        </span>
        <span className={style.send_to_phone}>
        Send to your Phone
        </span>
      </div>
    );
  }
}

Mapinfo.propTypes = {
  phoneNumber: PropTypes.any.isRequired,
};