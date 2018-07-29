import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import mapinfo from '../src/mapinfo.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Mapinfo test', () => {
  const wrapper = shallow(<mapinfo
   phoneNumber = {"268-731-9037"}
   address = {"2 Hayes St, San Francisco, CA"}
   relativeAddress = {"b/t Grove St & Fell St"}
   relativeDistrict = {"Hayes Valley"}
   url = {null}
   initialurl = {"theforesttrumpet.com"}
  />);
  expect(wrapper.find('.get-direction').exists()).toEqual(false);
});
