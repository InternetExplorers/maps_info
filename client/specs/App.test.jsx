import { configure } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
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
    expect(wrapper.find('search').exists()).toEqual(true);
  });
 
  it('should render google map component', () => {
    expect(wrapper.find('GoogleMap').exists()).toEqual(true);
  });

  it('should render map info', () => {
    expect(wrapper.find('MapInfo').exists()).toEqual(true);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });

});
