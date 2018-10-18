import React from 'react';
import { shallow } from 'enzyme';
import { mockNeighbors } from '../../utilities/mockData';
import MyNeighbors from './MyNeighbors';

describe('MyNeighbors component', () => {
  let wrapper;
  let mockGetNeighbors;

  beforeEach(() => {
    mockGetNeighbors = jest.fn();
    wrapper = shallow(
      <MyNeighbors getNeighbors={mockGetNeighbors} neighbors={mockNeighbors} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
