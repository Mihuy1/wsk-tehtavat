const movies = [];

const amount = parseInt(prompt('Enter how many movies to rate:'));

for (let i = 0; i < amount; i++) {
  const title = prompt('Enter movie title:');
  const rating = parseFloat(prompt(`Enter ${title} rating:`));

  movies.push({title: title, rating: rating});
}

// Sort
movies.sort((a, b) => b.rating - a.rating);

document.querySelector('#highest').textContent =
  'Highest rated movie: ' +
  movies[0].title +
  ' with rating: ' +
  movies[0].rating;

let movieList = '';
for (const movie of movies) {
  movieList += movie.title + ' with rating: ' + movie.rating + '<br>';
}

document.querySelector('#list').innerHTML = movieList;
