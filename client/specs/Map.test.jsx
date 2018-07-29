import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import Googlemap from '../src/map.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Map test', () => {
  it('should render map', () => {
    const wrapper = mount(<Googlemap
       phoneNumber={"123"}
        address={"123"}
        relativeAddress={"123"}
        relativeDistrict={"123"}
        url={"123"}
        initialurl={"123"}
     />);
    expect(wrapper.find('.main-map').exists()).toEqual(false);
  });

});
