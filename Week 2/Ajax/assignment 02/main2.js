async function createUser() {
  const userData = {
    name: 'Turpo',
    job: 'Janitor',
  };

  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error('Response not ok');

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Problem with fetching data:', error);
  }
}

createUser();
