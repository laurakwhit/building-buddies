import React from 'react';
import { shallow } from 'enzyme';

import MyNeighbors from './MyNeighbors';

describe('MyNeighbors component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MyNeighbors />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
