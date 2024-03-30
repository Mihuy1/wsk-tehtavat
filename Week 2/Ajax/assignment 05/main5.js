// your code here

const restaurantNameh2 = document.createElement('h2');
const restaurantAddress = document.createElement('p');
const restaurantPostalCode = document.createElement('p');
const restaurantCity = document.createElement('p');
const restaurantPhone = document.createElement('p');
const restaurantCompany = document.createElement('p');

const restaurantModal = document.querySelector('.restaurant-modal');
const restaurantModalContent = document.querySelector('.restaurant-modal-content');
const restaurantTable = document.getElementById('restaurant-table');

const apiUrl = 'https://api.example.com/restaurants';
const menuUrl = 'https://10.120.32.94/restaurant/api/v1/daily/:id/en';
const allRestaurants = 'https://10.120.32.94/restaurant/api/v1/restaurants/'

function displayRestaurantDetails(restaurant) {
  restaurantModal.style.display = 'block';
  restaurantModalContent.innerHTML = `
    <h2>${restaurant.name}</h2>
    <p>Address: ${restaurant.address}</p>
    <p>Postal Code: ${restaurant.postalCode}</p>
    <p>City: ${restaurant.city}</p>
    <p>Phone: ${restaurant.phone}</p>
    <p>Company: ${restaurant.company}</p>
  `;
}

function displayMenu(menu) {
  const menuItems = menu.map(item => `<p>${item.name}: ${item.price}</p>`).join('');
  restaurantModalContent.innerHTML += `<h3>Menu:</h3>${menuItems}`;
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

async function handleRestaurantClick(restaurantId) {
  try {
    const menuResponse = await fetchData(`${menuUrl}${restaurantId}/en`);
    displayMenu(menuResponse.courses);
  } catch (error) {
    console.error('Error fetching menu:', error.message);
  }
}

fetchData(allRestaurants)
.then(data => {
  data.forEach(restaurant => {
    const row = document.createElement('tr');
    row.classList.add('row');
    row.innerHTML = `
      <td>${restaurant.name}</td>
      <td>${restaurant.address}</td>

    `;
    row.addEventListener('click', () => {
      displayRestaurantDetails(restaurant);
      handleRestaurantClick(restaurant.id);
      row.classList.add('highlight');
    });
    restaurantTable.appendChild(row);
  });
}
)
.catch(error => console.error('Error fetching restaurants:', error.message));


// when clicked outside of the modal, close it
window.addEventListener('click', e => {
  if (e.target === restaurantModal) {
    restaurantModal.style.display = 'none';
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
      row.classList.remove('highlight');
    });
  }
});

