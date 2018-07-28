import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import Businesshours from '../src/Businesshours.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Business hours testing', () => {

  //Need this code 
  // it('pass in the correct props to business hours', () => {
    
  // });

  it('should render business hours entries', () => {
    const wrapper = mount(<Businesshours businessHours={[1,2,3]} />)
    expect(wrapper.find('.HoursHeading').exists()).toEqual(true);
  });

});
