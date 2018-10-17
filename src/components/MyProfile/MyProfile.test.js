import React from 'react';
import { shallow } from 'enzyme';

import MyProfile from './MyProfile';
import { mockInterests, mockUser } from '../../utilities/mockData';

describe('MyProfile component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MyProfile currentUser={mockUser} interests={mockInterests}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
