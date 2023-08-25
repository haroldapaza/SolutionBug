const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.listen(3000);

var quotes = [
    {
        'text': 'No hay nada como una taza de café para estimular las células del cerebro.',
        'author': 'Sherlock Holmes',
    },
    {
        'text': 'El café es un bálsamo para el corazón y el espíritu.',
        'author': 'Giuseppe Verdi',
    },
    {
        'text': 'El café huele a cielo recién molido.',
        'author': 'Jessi Lane Adams',
    },
    {
        'text': 'No es que el café me de insomnio, es que me hace soñar despierto.',
        'author': 'Anónimo',
    }
];
var coffes = [
    {
        'title': 'Expresso',
        'subtitle': 'Expresso cafe de buena calidad',
        'imageUrl': 'https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2013/04/cafe-espresso.jpg' 
    },
    {
        'title': 'Latte',
        'subtitle': 'Latte cafe de buena calidad.',
        'imageUrl': 'https://www.nescafe.com/es/sites/default/files/desk.jpg' 
    },
    {
        'title': 'Prensa francesa',
        'subtitle': 'Prensa francesa, cafe de buena calidad',
        'imageUrl': 'https://i.blogs.es/a68f15/prensafrancesa1/840_560.jpg' 
    },
    {
        'title': 'Cold Brew',
        'subtitle': 'Cold Brew, cafe de buena calidad.',
        'imageUrl': 'https://media.revistagq.com/photos/5ca5fa81eccc6a581bd558eb/16:9/w_1280,c_limit/cold_brew_cafe_694.jpg' 
    },
    {
        'title': 'Cafe con Leche',
        'subtitle': 'Cafe con Leche, cafe de buena calidad.',
        'imageUrl': 'https://p-cdn6coffee.jmsinf.com/tmp/image-thumbnails/cafebustelo/recipes/image-thumb__2356__auto_feab9401f1ce62dd47e2128655684d97/cab-cafe-con-leche.jpg' 
    },
    {
        'title': 'Lungo/largo',
        'subtitle': 'Lungo/largo Cafe con Leche, cafe de buena calidad.',
        'imageUrl': 'https://comohacercafe.com/wp-content/uploads/2021/06/eaf3c2cff4e5863626af11a012f00bb5.jpg' 
    },
    {
        'title': 'Carajillo',
        'subtitle': 'Carajillo, Cafe con Leche, cafe de buena calidad.',
        'imageUrl': 'https://imag.bonviveur.com/carajillo.jpg' 
    },
    {
        'title': 'Café bombón',
        'subtitle': 'Café bombón, Cafe con Leche, cafe de buena calidad.',
        'imageUrl': 'https://www.cafescandelas.com/uploads/media_items/caf%C3%A9-bomb%C3%B3n-500.500.500.s.jpg' 
    },
];

app.get('/random-quote', function(req, res) {
    var randomQuote = getRandomQuote();
	res.send(randomQuote);
});
app.get('/lists', function(req, res) {
    var getListCoffe1 = getListCoffe();
	res.send(getListCoffe1);
});

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
function getListCoffe() {
    return coffes;
}