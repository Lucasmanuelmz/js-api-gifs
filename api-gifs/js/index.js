const btn = document.querySelector('#refresh');
const img = document.querySelector('#images');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const defaultImageUrl = 'https://media2.giphy.com/media/78E3Cv7kKD5XW/giphy.gif?cid=19190ee4tk8owhhqqopwe975c13xn8rp9ugae0hfpgwvt9g8&ep=v1_gifs_translate&rid=giphy.gif&ct=g';

function searchGiphy() {
  const searchTerm = searchInput.value;

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=SwX8Xw5ch6JuKYsNPbyctL7KJgq7d3J3&s=${searchTerm}`, {
    mode: 'cors',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Requisition error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.data.images && data.data.images.original && data.data.images.original.url) {
        img.src = data.data.images.original.url;
        btn.addEventListener('click', () => {
          window.location.reload();
        });
      }
    })
    .catch((error) => {
      console.error('ERROR:', error);
    });
}
img.src = defaultImageUrl;

searchButton.addEventListener('click', searchGiphy);
