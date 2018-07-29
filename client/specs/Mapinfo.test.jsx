import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import Mapinfo from '../src/mapinfo.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Mapinfo test', () => {
  it('pass in the correct value to map info', () => {
    const wrapper = shallow(<Mapinfo
     phoneNumber={"268-731-9037"}
     url={"test.com"}
     address={"123 fake st"}
    />);
    expect(wrapper.find('.main-map-info').exists()).toEqual(true);
  });

});
