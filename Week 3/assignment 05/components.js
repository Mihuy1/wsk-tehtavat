const restaurantRow = (restaurant) => {
  const {name, address} = restaurant;
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${name}</td> <td>${address}</td>`;

  return tr;
};

const modalInfo = (name, address, postalCode, city, phone, company) => {
  const restaurantDetails = document.querySelector('.restaurant-details');
  restaurantDetails.innerHTML = `
    <h2>${name}</h2>
    <p>${address}</p>
    <p>${postalCode}</p>
    <p>${city}</p>
    <p>${phone}</p>
    <p>${company}</p>`;
  return restaurantDetails.innerHTML;
};

const modalMenu = (menu, daysOfWeek) => {
  const {days} = menu;
  const menuDetails = document.querySelector('.menu-details');
  for (const t of days) {
    const dateArray = t.date.split(',');
    if (dateArray[0] === daysOfWeek) {
      menuDetails.innerHTML += `
        <h2>${daysOfWeek}</h2>
      `;
      for (const {name, price} of t.courses) {
        menuDetails.innerHTML += `
          <p>${name}</p>
          <p><b>${price}</b></p>
        `;
      }
    }
  }
  return menuDetails;
};

export {restaurantRow, modalInfo, modalMenu};
