import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import Businessinfo from '../src/Businessinfo.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Business info testing', () => {

  it('should render business info entries', () => {
    const wrapper = mount(<Businessinfo businessInfo={{
        "id":"Yes",
        "business_id":"Yes",
        "take_reservations":"Yes",
        "delivery":"No",
        "take_out":"No",
        "accepts_credit_cards":"No",
        "accepts_google_pay":"No",
        "bike_parking":"No",
        "wheelchair_accessible":"No",
        "good_for_kids":"No",
        "good_for_groups":"No",
        "wi_fi":"Yes","has_tv":"Yes",
        "waiter_service":"Yes",
        "caters":"Yes",
        "gender_neutral_restrooms":"No"
    }}
    />);
    expect(wrapper.find('.MoreBusinessInfoHeading').exists()).toEqual(true);
  });

});
