import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import App from '../src/app.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('App testing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should be a stateful component', () => {
    expect(React.Component.isPrototypeOf(App)).toBe(true);
  });

  it('should render search bar component', () => {
    expect(wrapper.find('.search').exists()).toEqual(true);
  });
 
  it('should render google map component', () => {
    expect(wrapper.find('.GoogleMap').exists()).toEqual(true);
  });

  it('should render map info', () => {
    expect(wrapper.find('.MapInfo').exists()).toEqual(true);
  });

  it('should call handleSearch and update the correct url', () => {
    wrapper.instance().handleSearch('jewel');
    expect(wrapper.state('url')).toEqual('jewel.com');
  });

  it('should call getBusinessInfo when componentDidMount is invoked', () => {
      wrapper.instance().getBusinessInfo = jest.fn();
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().getBusinessInfo).toBeCalled();
  });

   it('should call getBusinessInfo when componentDidMount is invoked', () => {
      wrapper.instance().getBusinessAddress = jest.fn();
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().getBusinessAddress).toBeCalled();
  });

});
