'use strict';
async function testFetch() {
  try {
    const response = await fetch('https://reqres.in/api/users/1');
    if (!response.ok) throw new Error('Invalid input!');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

testFetch();
