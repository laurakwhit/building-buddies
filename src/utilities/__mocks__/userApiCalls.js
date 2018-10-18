import { mockUserInterests } from '../mockData';

export const getUserInterests = jest
  .fn()
  .mockImplementation(() => Promise.resolve(mockUserInterests));

export const addUser = jest
  .fn()
  .mockImplementation(() => Promise.resolve({ id: 66 }));

export const addUserInterest = jest
  .fn()
  .mockImplementation(() => Promise.resolve({ id: 166 }));

export const deleteUserInterest = jest.fn().mockImplementation(() =>
  Promise.resolve({
    message: 'Interest 2 was successfully deleted for user 67.'
  })
);
