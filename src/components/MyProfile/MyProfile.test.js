import React from 'react';
import { shallow } from 'enzyme';

import MyProfile from './MyProfile';
import { mockInterests, mockUser, mockUserInterests } from '../../utilities/mockData';

describe('MyProfile component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MyProfile currentUser={mockUser} interests={mockInterests}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial state', () => {
    expect(wrapper.state('userInterests')).toEqual([]);
  });

  it.skip('should update state', () => {
    expect(wrapper.state('userInterests')).toEqual(mockUserInterests);
  });
});
