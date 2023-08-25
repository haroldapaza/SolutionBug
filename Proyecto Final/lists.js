var watchFavorites = false;
var baseUrl = 'http://192.168.1.41:3000';
let list;

document.addEventListener('DOMContentLoaded', function () {
  fillList();
}, false);

function fillList() {
  var favoritesBtn = document.getElementById('favorites-btn');
  var listTitle = document.getElementById('list-title');
  if (watchFavorites && isLogged()) {
    fillFavoriteList();
  } else {
    fillAllList();
    if (isLogged()) {
      favoritesBtn.innerHTML = 'Ver Favoritos';
      listTitle.innerHTML = 'Listado Completo';
    }
  }
}

function toggleFavoritesList() {
  watchFavorites = !watchFavorites;
  fillList();
}



function fillAllList() {
  var items = document.getElementById('items');
  fetch(baseUrl + '/lists', {
    method: 'GET'
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      list = null;
      items.innerHTML = '';
      list = JSON.parse(data);
      for (i = 1; i < list.length; i++) {
        var item = list[i];
        var favorite = isFavorite(item.title);
        addItem(item, favorite);
      }
    })
    .catch(function (err) {
      authorText.textContent = '-';
    });

}

function fillFavoriteList() {
  var items = document.getElementById('items');
  fetch(baseUrl + '/lists', {
    method: 'GET'
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      list = null;
      items.innerHTML = '';
      list = JSON.parse(data);
      for (i = 0; i < list.length; i++) {
        var item = list[i];
        var favorite = isFavorite(item.title);
        if (favorite) {
          addItem(item, favorite);
        }
      }
    })
    .catch(function (err) {
      authorText.textContent = '-';
    });


}


function addItem(item, favorite) {
  if (!isLogged()) {
    favorite = false;
  }
  var list = document.getElementById('items');
  list.insertAdjacentHTML('beforeend',
    '<div class="col-lg-3 col-sm-6" onclick="toggleFavorite(\'' + item.title + '\')">' +
    '  <div class="items__item hover__box">' +
    '    <div class="items__thumb hover__box__thumb">' +
    '      <a title="' + item.title + '">' +
    '        <img style = "width: 100%; height: 360px;" src="' + item.imageUrl + '" alt="' + item.title + '">' +
    '      </a>' +
    '    </div>' +
    '    <h1 class="items__name" id="favorite_' + item.title + '">' + favoriteIcon(favorite) + '</h1>' +
    '    <div class="items__info">' +
    '      <h3 class="items__capital">' + item.title + '</h3>' +
    '      <p class="items__number">' + item.subtitle + '</p>' +
    '    </div>' +
    '  </div>' +
    '</div>'
  );
}

function favoriteIcon(favorite) {
  return favorite ? '❤' : '';
}