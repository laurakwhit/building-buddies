import React from 'react';
import { shallow } from 'enzyme';

import Account from './Account';

describe('Account component', () => {
  let wrapper;
  let mockHandleLogOut;

  beforeEach(() => {
    mockHandleLogOut = jest.fn();
    wrapper = shallow(<Account handleLogOut={mockHandleLogOut} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
