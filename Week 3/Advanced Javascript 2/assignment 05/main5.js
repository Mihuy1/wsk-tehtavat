'use strict';

import {restaurantRow} from './components.js';
import {modalInfo} from './components.js';
import {fetchData} from './variables.js';
import {allRestaurants} from './variables.js';

const restaurantModal = document.querySelector('.restaurant-modal');
const restaurantTable = document.getElementById('restaurant-table');

const displayRestaurantDetails = ({
  name,
  address,
  postalCode,
  city,
  phone,
  company,
}) => {
  restaurantModal.style.display = 'block';
  const restaurantDetails = document.querySelector('.restaurant-details');
  restaurantDetails.innerHTML = '';
  modalInfo(name, address, postalCode, city, phone, company);
};

const getWeeklyMenu = async (restaurantId) => {
  const menuUrl = `https://10.120.32.94/restaurant/api/v1/restaurants/weekly/${restaurantId}/en`;
  fetchData(menuUrl)
    .then((data) => {
      console.log(data);
      displayWeeklyMenu(data);
    })
    .catch((error) =>
      console.error('Error fetching weekly menu:', error.message)
    );
};

const displayWeeklyMenu = (menu) => {
  const menuDetails = document.querySelector('.menu-details');
  menuDetails.innerHTML = '';
  restaurantModal.style.display = 'block';

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

  menu.days.forEach(({date, courses}) => {
    const dateArray = date.split(',');
    if (dateArray[0] === currentDayOfWeek) {
      menuDetails.innerHTML += `<h2>${currentDayOfWeek}</h2>`;
      courses.forEach(({name, price}) => {
        menuDetails.innerHTML += `
          <p>${name}</p>
          <p><b>${price}</b></p>
        `;
      });
    }
  });
};

fetchData(allRestaurants)
  .then((data) => {
    data.forEach(({name, address, city, postalCode, phone, company, _id}) => {
      const row = restaurantRow({name, address});
      row.classList.add('row');
      row.addEventListener('click', () => {
        displayRestaurantDetails({
          name,
          address,
          postalCode,
          city,
          phone,
          company,
        });
        getWeeklyMenu(_id);
        row.classList.add('highlight');
      });
      restaurantTable.appendChild(row);
    });
  })
  .catch((error) => {
    console.error('Error fetching restaurants:', error.message);
    alert('Make sure you are connected to the VPN / school network');
  });

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

const filterInput = document.querySelector('#filter-input');
const filterButton = document.querySelector('#filter-button');

filterButton.addEventListener('click', () => {
  restaurantTable.innerHTML = '';
  fetchData(allRestaurants).then((data) => {
    const filteredData = data.filter(
      ({company}) => company === filterInput.value
    );
    if (filteredData.length === 0) {
      alert('No restaurants found');
      location.reload();
      return;
    }
    filteredData.forEach(
      ({name, address, city, postalCode, phone, company, _id}) => {
        const row = restaurantRow({name, address});
        row.classList.add('row');
        row.addEventListener('click', () => {
          displayRestaurantDetails({
            name,
            address,
            postalCode,
            city,
            phone,
            company,
          });
          getWeeklyMenu(_id);
          row.classList.add('highlight');
        });
        restaurantTable.appendChild(row);
      }
    );
  });
});
