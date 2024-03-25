function multiplication() {
  const number = parseInt(prompt('Enter number'));

  let tableHTML = '<table>';

  for (let i = 1; i <= number; i++) {
    tableHTML += '<tr>';

    for (let j = 1; j <= number; j++) {
      const product = i * j;
      tableHTML += `<td>${i} x ${j} = ${product}</td>`;
    }

    tableHTML += '</tr>';
  }

  tableHTML += '</table>';

  document.getElementById('table').innerHTML = tableHTML;
}

multiplication();
