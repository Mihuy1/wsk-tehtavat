const allRestaurants = 'https://10.120.32.94/restaurant/api/v1/restaurants/';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data:', error.message);
  }
};

export {allRestaurants, fetchData};
