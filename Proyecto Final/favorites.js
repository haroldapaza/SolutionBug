function toggleFavorite(title) {
  var favorite = isFavorite(title);
  if (favorite) {
    removeFavorite(title);
  } else {
    addFavorite(title);
  }
}

function isFavorite(title) {
  var favoritesJSON = localStorage.getItem('favorites');
  var favorites;
  if (favoritesJSON == null) {
    favorites = [];
  } else {
    favorites = JSON.parse(favoritesJSON);
  }
  var isFavorite = favorites.includes(title);
  return isFavorite;
}

function addFavorite(title) {
  try {
    if (isLogged()) {
      var favoritesJSON = localStorage.getItem('favorites');
      var favorites = [];
      if (favoritesJSON) {
        favorites = JSON.parse(favoritesJSON);
      }
      favorites.push(title);
      localStorage.setItem('favorites', JSON.stringify(favorites));

      var favoriteIcon = document.getElementById('favorite_' + title);
      favoriteIcon.innerHTML = '❤';
    }
  } catch (err) {
    console.error('Error al agregar favorito');
  }
}

function removeFavorite(title) {
  try {
    if (isLogged()) {
      var favoritesJSON = localStorage.getItem('favorites');
      var favorites;
      if (favoritesJSON == null) {
        favorites = [];
      } else {
        favorites = JSON.parse(favoritesJSON);
      }
      var indexOfTitle = favorites.indexOf(title);
      favorites.splice(indexOfTitle, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));

      var favoriteIcon = document.getElementById('favorite_' + title);
      favoriteIcon.innerHTML = '';
    }
  } catch (err) {
    console.error('Error al agregar favorito');
  }
}
