import React from 'react';
import { shallow } from 'enzyme';

import Account from './Account';

describe('Account component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Account />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
