import {
  mockUser,
  mockInterests,
  mockNeighbors,
  mockUserInterests,
  mockUserBuilding,
  mockBuildings
} from '../mockData';

export const getAllBuildings = jest
  .fn()
  .mockImplementation(() => Promise.resolve(mockBuildings));

export const getAllBuildingUsers = jest
  .fn()
  .mockImplementation(() => Promise.resolve(mockNeighbors));
