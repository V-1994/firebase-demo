const express = require('express')

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/firestore");

const app = express()
const port = 3000

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyBgj6uuiUJpaOUcSJy_3W216Ex09LzXWGo",
    authDomain: "busyhubs-d6b09.firebaseapp.com",
    projectId: "busyhubs-d6b09",
    storageBucket: "busyhubs-d6b09.appspot.com",
    messagingSenderId: "1047097120477",
    appId: "1:1047097120477:web:8e859aeaa183899e79ed34"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

app.set('view engine', 'ejs')

app.use(express.static('photos'))

var db = firebase.firestore();

db.collection("VK").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const genre = doc.data().genre;
        const rating = doc.data().rating;
        const movie = doc.data().movie;
        const parts = doc.data().parts;
        const budget = doc.data().budget;
        const boxoffice = doc.data().boxoffice;
    })
})

app.get('/', (req, res) => {
    
    const list = [
        {movie: 'National Treasure', parts: 2, genre: 'adventure', budget: '$230,000,000', boxoffice: '$806,754,567', rating: 7.5},
        {movie: 'Journey', parts: 2, genre: 'adventure', budget: '$60,000,000', boxoffice: '$244,000,002', rating: 8},
        {movie: 'Jumanji', parts: 2, genre: 'adventure', budget: '$345,000,000', boxoffice: '$1,787,578,000', rating: 8.3},
        {movie: 'Harry Potter', parts: 8, genre: 'fantacy', budget: '$1,200,000,000', boxoffice: '$7,700,000,000', rating: 9.2},
        {movie: 'Fallen', parts: 3, genre: 'action', budget: '$170,000,000', boxoffice: '$523,500,000', rating: 8.5},
    ]
    res.render('pages/home', {
        list: list,
    })
})

app.get('/nationaltreasure', (req, res) => {
    res.render('pages/nationaltreasure')
})

app.get('/journey', (req, res) => {
    res.render('pages/journey')
})

app.get('/jumanji', (req, res) => {
    res.render('pages/jumanji')
})

app.get('/harrypotter', (req, res) => {
    res.render('pages/harrypotter')
})

app.get('/fallen', (req, res) => {
    res.render('pages/fallen')
})

app.listen(port, () => {
    console.log(`app is listening at port ${port}`)
})