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
    wrapper = shallow(<Search handleSearch={() => {}} />);
  });

  it('render the correct search value to state', () => {
    wrapper.instance().handleValueChange({ target: { value: 'cookies' } });
    expect(wrapper.state('searchValue')).toEqual('cookies');
  });

  it('should simulate search click', () => {
    const handleSearchClick = jest.fn();
    const wrapper = shallow(<input onClick={handleSearchClick} />);
    wrapper.simulate('click');
    expect(handleSearchClick).toBeCalled();
  });

});
