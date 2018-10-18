import React from 'react';
import { shallow } from 'enzyme';

import MyProfile from './MyProfile';
import {
  mockInterests,
  mockUser,
  mockUserInterests
} from '../../utilities/mockData';

describe('MyProfile component', () => {
  let wrapper;
  let mockUpdateUserInterests;

  beforeEach(() => {
    mockUpdateUserInterests = jest.fn();
    wrapper = shallow(
      <MyProfile
        currentUser={mockUser}
        interests={mockInterests}
        userInterests={mockUserInterests}
        updateUserInterests={mockUpdateUserInterests}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update user interests when checkbox is clicked', () => {
    const mockEvent = { target: { name: 'golf' } };
    wrapper
      .find('.checkbox-cell input')
      .first()
      .simulate('change', mockEvent);
    expect(mockUpdateUserInterests).toHaveBeenCalled();
  });
});
