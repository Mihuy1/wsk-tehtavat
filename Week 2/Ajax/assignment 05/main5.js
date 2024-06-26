// your code here

const restaurantModal = document.querySelector('.restaurant-modal');

const restaurantTable = document.getElementById('restaurant-table');

const allRestaurants = 'https://10.120.32.94/restaurant/api/v1/restaurants/';

async function displayRestaurantDetails(restaurant) {
  restaurantModal.style.display = 'block';
  // Clear the modal content
  const restaurantDetails = document.querySelector('.restaurant-details');
  restaurantDetails.innerHTML = '';
  // Display the restaurant details
  restaurantDetails.innerHTML = `
    <h2>${restaurant.name}</h2>
    <p>Address: ${restaurant.address}</p>
    <p>Postal Code: ${restaurant.postalCode}</p>
    <p>City: ${restaurant.city}</p>
    <p>Phone: ${restaurant.phone}</p>
    <p>Company: ${restaurant.company}</p>
  `;
}

async function fetchData(url) {
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
}

async function getWeeklyMenu(restaurantId) {
  const menuUrl = `https://10.120.32.94/restaurant/api/v1/restaurants/weekly/${restaurantId}/en`;
  fetch(menuUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayWeeklyMenu(data);
    })
    .catch((error) =>
      console.error('Error fetching weekly menu:', error.message)
    );
}

async function displayWeeklyMenu(menu) {
  const restaurantModal = document.querySelector('.restaurant-modal');
  const menuDetails = document.querySelector('.menu-details');
  menuDetails.innerHTML = '';
  restaurantModal.style.display = 'block';

  // Get the day of the week
  const date = new Date();
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const currentDayOfWeek = daysOfWeek[date.getDay()];

  for (const t of menu.days) {
    const dateArray = t.date.split(',');
    // Check if the dateArray contains the current day of the week
    if (dateArray[0] === currentDayOfWeek) {
      // Log the courses for the current day of the week
      menuDetails.innerHTML += `
        <h2>${currentDayOfWeek}</h2>
      `;
      for (const course of t.courses) {
        menuDetails.innerHTML += `
          <p>${course.name}</p>
          <p><b>${course.price}</b></p>
        `;
      }
    }
  }
}

fetchData(allRestaurants)
  .then((data) => {
    data.forEach((restaurant) => {
      const row = document.createElement('tr');
      row.classList.add('row');
      row.innerHTML = `
      <td>${restaurant.name}</td>
      <td>${restaurant.address}</td>

    `;
      row.addEventListener('click', () => {
        displayRestaurantDetails(restaurant);
        getWeeklyMenu(restaurant._id);
        row.classList.add('highlight');
      });
      restaurantTable.appendChild(row);
    });
  })
  .catch((error) =>
    console.error('Error fetching restaurants:', error.message)
  );

// when clicked outside of the modal, close it
window.addEventListener('click', (e) => {
  if (e.target === restaurantModal) {
    restaurantModal.style.display = 'none';
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
      row.classList.remove('highlight');
    });
  }
});
