export const fetchPlayers = async () => {
  const response = await fetch('http://localhost:3000/players');
  const data = await response.json();
  return data;
};
