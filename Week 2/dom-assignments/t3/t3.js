const userAgent = navigator.userAgent;

let operatingSystem = 'Unknown';
if (navigator.userAgent.indexOf('Win') != -1) operatingSystem = 'Windows';
if (navigator.userAgent.indexOf('Mac') != -1) operatingSystem = 'MacOS';
if (navigator.userAgent.indexOf('Linux') != -1) operatingSystem = 'Linux';

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

const currentDate = new Date();

const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const finnishDate = currentDate.toLocaleDateString('fi-FI', options);
const finnishTime = currentDate.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

const targetDiv = document.querySelector('div');

targetDiv.insertAdjacentHTML('beforeend', `<p>User Agent: ${userAgent}</p>`);
targetDiv.insertAdjacentHTML(
  'beforeend',
  `<p>Operating System: ${operatingSystem}</p>`
);
targetDiv.insertAdjacentHTML(
  'beforeend',
  `<p>Screen Width: ${screenWidth}</p>`
);
targetDiv.insertAdjacentHTML(
  'beforeend',
  `<p>Screen Height: ${screenHeight}</p>`
);
targetDiv.insertAdjacentHTML(
  'beforeend',
  `<p>Viewport Width: ${viewportWidth}</p>`
);
targetDiv.insertAdjacentHTML(
  'beforeend',
  `<p>Viewport Height: ${viewportHeight}</p>`
);
targetDiv.insertAdjacentHTML(
  'beforeend',
  `<p>Current Date: ${finnishDate}</p>`
);
targetDiv.insertAdjacentHTML(
  'beforeend',
  `<p>Current Time: ${finnishTime}</p>`
);
