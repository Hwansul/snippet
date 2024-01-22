const arrayToHTMLList = (arr, listID) =>
  document.querySelector(`#${listID}`).innerHTML += arr
    .map(item => `<li>${item}</li>`)
    .join('');

arrayToHTMLList(['item 1', 'item 2'], 'myListID');
