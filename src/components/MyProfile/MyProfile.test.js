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
  let mockHandleLogout;

  beforeEach(() => {
    mockHandleLogout = jest.fn();
    mockUpdateUserInterests = jest.fn();

    wrapper = shallow(
      <MyProfile
        currentUser={mockUser}
        interests={mockInterests}
        userInterests={mockUserInterests}
        updateUserInterests={mockUpdateUserInterests}
        handleLogout={mockHandleLogout}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
