export const getAllBuildings = async () => {
  const response = await fetch(`${process.env.REACT_APP_API}/api/v1/buildings`);
  const buildings = await response.json();
  return buildings;
};

export const getBuilding = async () => {};

export const getAllBuildingUsers = async buildingId => {
  const response = await fetch(
    `${process.env.REACT_APP_API}/api/v1/buildings/${buildingId}/users`
  );
  const buildingUsers = await response.json();
  return buildingUsers;
};
