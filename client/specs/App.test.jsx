import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
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

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });

  it('should call handleSearch and update the correct url', () => {
    wrapper.instance().handleSearch('jewel');
    expect(wrapper.state('url')).toEqual('jewel.com');
  });

  it('should call getBusinessInfo when componentDidMount is invoked', () => {
      wrapper.instance().getBusinessInfo = jest.fn();
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().getBusinessInfo).toBeCalled();
  });

  // it('should call getBusinessInfo and update correct business hours', () => {
  //   wrapper.instance().getBusinessInfo('roadhouse');
  //   wrapper.update();
  //   expect(wrapper.state('businessHours')).toEqual([{"val":"6:48 am - 2:1 pm","tag":"Mon"},{"val":"10:48 am - 7:20 pm","tag":"Tue"},{"val":"7:45 am - 11:57 pm","tag":"Wed"},{"val":"6:15 am - 7:43 pm","tag":"Thu"},{"val":"7:20 am - 7:36 pm","tag":"Fri"},{"val":"8:33 am - 10:9 pm","tag":"Sat"},{"val":"10:27 am - 5:18 pm","tag":"Sun"}]);
  // });
});
