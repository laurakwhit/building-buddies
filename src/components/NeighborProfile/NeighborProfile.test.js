import React from 'react';
import { shallow } from 'enzyme';

import NeighborProfile from './NeighborProfile';
import { mockNeighbor } from '../../utilities/mockData';

describe('NeighborProfile component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NeighborProfile neighbor={mockNeighbor} />);
  });

  it('should match the snapshhot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial state', () => {
    expect(wrapper.state('neighborInterests')).toEqual([]);
  });

  it('should match the snapshot with neighbor interests', () => {
    wrapper.setState({ neighborInterests: [{ id: 1, name: 'golf' }] });
    expect(wrapper).toMatchSnapshot();
  });
});
