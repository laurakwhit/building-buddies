export const getAllBuildings = async() => {
  const response = await fetch(process.env.REACT_APP_API + '/api/v1/buildings');
  const buildings = await response.json();
  return buildings;
}