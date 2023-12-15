export const handleApi = async (word) => {
  const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RapidAPI_Key,
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response) throw Error;
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
