import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import Googlemap from '../src/Map.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Map test', () => {

 //need to change it to false

  it('should render map', () => {
    const wrapper = shallow(<Googlemap
      google={undefined}
      initialCenter={{
        lat: 37.7777515,
        lng: -122.4164152,
      }}
      center={{
        lat: 37.7777515,
        lng: -122.4164152,
      }}
      zoom={14}
      onClick={undefined}
      style={{ width: '286', height: '135', position: 'relative' }}
     />)
    expect(wrapper.find('.Map').exists()).toEqual(false);
  });

});
