import React from 'react';
import { shallow } from 'enzyme';
import {
  mockBuildings,
  interests,
  mockInterests
} from '../../utilities/mockData';
import SignUpModal from './SignUpModal';

describe('SignUpModal component', () => {
  let wrapper;
  let mockHandleModalClose;
  let mockUserSignUp;

  beforeEach(() => {
    mockHandleModalClose = jest.fn();
    mockUserSignUp = jest.fn();

    wrapper = shallow(
      <SignUpModal
        buildings={mockBuildings}
        interests={mockInterests}
        handleModalClose={mockHandleModalClose}
        userSignUp={mockUserSignUp}
      />
    );
  });

  it('it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call userSignUp when a valid form is submitted', () => {
    wrapper.setState({
      name: 'Bob',
      email: 'bob123123@example.com',
      password: 'asdfasdf',
      interests: [
        {
          id: 2,
          name: 'gardening',
          created_at: '2018-10-14T18:06:35.038Z',
          updated_at: '2018-10-14T18:06:35.038Z'
        }
      ],
      searchValue: 'amaranth apartments'
    });

    wrapper.find('.sign-up-form button').click();

    expect(mockUserSignUp).toHaveBeenCalled();
  });
});
