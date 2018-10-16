import React from 'react';
import { shallow } from 'enzyme';

import MyProfile from './MyProfile';

describe('MyProfile component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MyProfile />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
