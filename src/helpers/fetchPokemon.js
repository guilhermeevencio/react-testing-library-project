const fetchingItem = async (limit, offset) => {
  const response = await fetch(`https://pokeapi.co/api/v2/location/?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  // console.log(data);
  return data;
};

export default fetchingItem;
