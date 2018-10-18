import React from 'react';
import { shallow } from 'enzyme';
import { Routes } from './Routes';
import { mockBuildings, mockHistory } from '../../utilities/mockData';

import { addUser, addUserInterest } from '../../utilities/userApiCalls';

jest.mock('../../utilities/buildingApiCalls');
jest.mock('../../utilities/userApiCalls');

describe('Routes component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Routes history={mockHistory} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial state', () => {
    const expected = {
      buildings: [],
      interests: [],
      currentUser: {},
      userBuilding: {},
      userInterests: [],
      neighbors: [],
      error: ''
    };

    expect(wrapper.state()).toEqual(expected);
  });

  it('should call addUser when signUpUser is called', async () => {
    wrapper.setState({
      buildings: mockBuildings
    });

    await wrapper.instance().userSignUp({
      name: 'Bob Example',
      email: 'bob@example.com',
      password: 'asdfasdf',
      searchValue: 'modera observatory park',
      interests: [
        {
          id: 11,
          name: 'skiing',
          created_at: '2018-10-14T18:06:35.038Z',
          updated_at: '2018-10-14T18:06:35.038Z'
        },
        {
          id: 12,
          name: 'snowboarding',
          created_at: '2018-10-14T18:06:35.038Z',
          updated_at: '2018-10-14T18:06:35.038Z'
        },
        {
          id: 13,
          name: 'mountain biking',
          created_at: '2018-10-14T18:06:35.038Z',
          updated_at: '2018-10-14T18:06:35.038Z'
        }
      ]
    });

    expect(addUser).toHaveBeenCalledWith({
      name: 'Bob Example',
      email: 'bob@example.com',
      password: 'asdfasdf',
      building_id: 1
    });
  });

  it('should call addUserInterest with the correct params when userInterestPost is called', async () => {
    await wrapper.instance().userInterestPost(65, [
      {
        id: 12,
        name: 'snowboarding',
        created_at: '2018-10-14T18:06:35.038Z',
        updated_at: '2018-10-14T18:06:35.038Z'
      },
      {
        id: 13,
        name: 'mountain biking',
        created_at: '2018-10-14T18:06:35.038Z',
        updated_at: '2018-10-14T18:06:35.038Z'
      }
    ]);

    expect(addUserInterest).toHaveBeenCalledWith({
      user_id: 65,
      interest_id: 12
    });
  });

  // it('should set the currentUser with userSignUp', async () => {
  //   const buildings = [
  //     {
  //       id: 1,
  //       name: 'Modera Observatory Park',
  //       address: '1910 S Josephine St\nDenver, CO\n',
  //       created_at: '2018-10-14T18:06:35.020Z',
  //       updated_at: '2018-10-14T18:06:35.020Z'
  //     },
  //     {
  //       id: 2,
  //       name: 'The Modern Apartment Homes',
  //       address: '6301 W Hampden Ave\nDenver, CO\n',
  //       created_at: '2018-10-14T18:06:35.020Z',
  //       updated_at: '2018-10-14T18:06:35.020Z'
  //     }
  //   ];

  // window.fetch = jest.fn().mockImplementation(() => {
  //   Promise.resolve({
  //     json: () => Promise.resolve(mockBuildings)
  //   });
  // });

  //   const expected = {
  //     buildings: buildings,
  //     interests: mockInterests,
  //     currentUser: mockUser,
  //     userBuilding: mockUserBuilding,
  //     userInterests: mockInterests,
  //     neighbors: mockNeighbors,
  //     error: ''
  //   };

  //   wrapper.setState({
  //     buildings: buildings
  //   });

  //   await wrapper.instance().userSignUp({
  //     name: 'Bob Example',
  //     email: 'bob@example.com',
  //     password: 'asdfasdf',
  //     searchValue: 'modera observatory park',
  //     interests: [
  //       {
  //         id: 11,
  //         name: 'skiing',
  //         created_at: '2018-10-14T18:06:35.038Z',
  //         updated_at: '2018-10-14T18:06:35.038Z'
  //       },
  //       {
  //         id: 12,
  //         name: 'snowboarding',
  //         created_at: '2018-10-14T18:06:35.038Z',
  //         updated_at: '2018-10-14T18:06:35.038Z'
  //       },
  //       {
  //         id: 13,
  //         name: 'mountain biking',
  //         created_at: '2018-10-14T18:06:35.038Z',
  //         updated_at: '2018-10-14T18:06:35.038Z'
  //       }
  //     ]
  //   });

  //   expect(wrapper.state()).toEqual(expected);
  // });
});
