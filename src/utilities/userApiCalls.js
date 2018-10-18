export const getUserInterests = async user_id => {
  const response = await fetch(
    `${process.env.REACT_APP_API}/api/v1/users/${user_id}/interests`
  );
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
  const data = await response.json();
  return data;
};

export const addUserInterest = async ({ user_id, interest_id }) => {
  const response = await fetch(
    `${
      process.env.REACT_APP_API
    }/api/v1/users/${user_id}/interests/${interest_id}`,
    {
      method: 'POST'
    }
  );
  const data = await response.json();
  return data;
};

export const deleteUserInterest = async ({ user_id, interest_id }) => {
  const response = await fetch(
    `${
      process.env.REACT_APP_API
    }/api/v1/users/${user_id}/interests/${interest_id}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ interest_id }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  const data = await response.json();
  return data;
};
