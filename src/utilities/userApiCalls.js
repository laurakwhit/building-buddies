export const getUserInterests = async (user_id) => {
  const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/${user_id}/interests`);
  const interests = await response.json();
  return interests;
};

export const addUser = async ({ name, email, password, building_id }) => {
  const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users`, {
    method: 'POST',
    body: JSON.stringify({ name, email, password, building_id }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
};