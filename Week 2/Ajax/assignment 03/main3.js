async function fetchData() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23');
    if (!response.ok) throw new Error('Incorrect input!');
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log('Encountered an error:', error);
  }
}

async function postData() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: 'John', job: 'Developer'}),
    });
    if (!response.ok) throw new Error('Incorrect input!');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Encountered an error:', error);
  }
}

async function deleteData() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Incorrect input');
    console.log('Data deleted');
  } catch (error) {
    console.log('Encountered an error:', error);
  }
}

fetchData();
postData();
deleteData();
