import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import Search from '../src/Search.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('Search testing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('render the correct search value to state', () => {
    wrapper.instance().handleValueChange({ target: { value: 'cookies' } });
    expect(wrapper.state('searchValue')).toEqual('cookies');
  });

  //need the following code
  // // it('simulates click events', () => {
  // //   const onButtonClick = sinon.spy();
  // //   const wrapper = shallow(<Search onClick={onButtonClick} />);
  // //   wrapper.find('button').simulate('click');
  // //   expect(onButtonClick).to.have.property('callCount', 1);
  // // });
  // it('simulate click events and pass in correct value', () => {
  //    wrapper.find('.searchButton').simulate('click');
  //    expect(onClick).to.have.property('callCount', 1);
  // });
});
