export const getAllInterests = async () => {
  const response = await fetch(`${process.env.REACT_APP_API}/api/v1/interests`);
  const interests = await response.json();
  return interests;
};

export const addInterest = async () => {};
