$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyBpuy4flU2csWxQXFDAYFt30RsufAnMPjA',
    authDomain: 'pelimotion.firebaseapp.com',
    databaseURL: 'https://pelimotion.firebaseio.com',
    projectId: 'pelimotion',
    storageBucket: 'pelimotion.appspot.com',
    messagingSenderId: '597429938830'
  };
  firebase.initializeApp(config);

  var provider = new firebase.auth.GoogleAuthProvider();

  // Función para guardar automáticamente
  function save(user) {
    var usuario = {
      uid: user.uid,
      username: user.displayName,
      usermail: user.email,
      userphoto: user.photoURL
    };
    firebase.database().ref('speakup/' + user.uid).set(usuario);
  };

  // Evento para el botón Inicia sesión
  $('#login').on('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      save(result.user);
      // Guardando en el localstorage
      window.localStorage.setItem('name', result.user.displayName);
      var name = window.localStorage.getItem('name');
      // window.localStorage.setItem('photo', result.user.photoURL);
      // var img = window.localStorage.getItem('photo');

      window.localStorage.setItem('foto', result.user.photoURL);
      var photo = window.localStorage.getItem('foto');
      // window.location.href = 'views/speakup.html';
    });
  });

  var info;
  var picture;
  // function nueva(result) {
  //   save(result.user);
  //   info = $('#name').append('<h3>' + name + '</h3>');
  //   picture = $('#root').append("<img src='" + result.user.photoURL + "' />");
  //   console.log(result.user.displayName);
  // };
  var movieArrayData = Object.keys(movieData);
  console.log(movieArrayData);
  function apiCall(arr) {
    $('.images').text(' ');
    for (var i = 0; i < arr.length; i++) {
      console.log(arr);
      $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(arr[i]) + '&apikey=a498e26d').then(function(response) {
        console.log(response);
        var image = response.Poster;
        console.log(image);
        if (image !== 'N/A') {
          $('.images').append('<div><div class="col-md-4"><img class="thumbnail" src="' + image + '"></img></div></div>');
        }
      });
    }
  }
  $('#alegria').on('click', function() {
    $('.text').text(' ');
    apiCall(Object.values(movieData.alegria));
    $('.text').append('<h1> Peliculas que causan ' + movieArrayData[0] + '</h1>');
    $('.slider').hide();
    $('.title').hide();
  });
  $('#alegria').on('mouseover', function() {
    $('.carita1').show();
    $('.carita1').addClass('efecto-carita');
    // $('ul.list-inline>li>span').addClass('show');
  });
  $('#alegria').on('mouseout', function() {
    $('.carita1').hide();
    // $('ul.list-inline>li>span').addClass('show');
  });


  $('#adrenalina').on('click', function() {
    $('.text').text(' ');
    apiCall(Object.values(movieData.adrenalina));
    $('.text').append('<h1> Peliculas que causan ' + movieArrayData[1] + '</h1>');
    $('.slider').hide();
    $('.title').hide();
  });
  $('#adrenalina').on('mouseover', function() {
    $('.carita2').show();
    $('.carita2').addClass('efecto-carita');
  });
  $('#adrenalina').on('mouseout', function() {
    $('.carita2').hide();
  });


  $('#miedo').on('click', function() {
    $('.text').text(' ');
    apiCall(Object.values(movieData.miedo));
    $('.text').append('<h1> Peliculas que causan ' + movieArrayData[2] + '</h1>');
    $('.slider').hide();
    $('.title').hide();
  });
  $('#miedo').on('mouseover', function() {
    $('.carita3').show();
    $('.carita3').addClass('efecto-carita');
  });
  $('#miedo').on('mouseout', function() {
    $('.carita3').hide();
  });


  $('#reflexion').on('click', function() {
    $('.text').text(' ');
    apiCall(Object.values(movieData.reflexion));
    $('.text').append('<h1> Peliculas que causan ' + movieArrayData[3] + '</h1>');
    $('.slider').hide();
    $('.title').hide();
  });
  $('#reflexion').on('mouseover', function() {
    $('.carita4').show();
    $('.carita4').addClass('efecto-carita');
  });
  $('#reflexion').on('mouseout', function() {
    $('.carita4').hide();
  });


  $('#romance').on('click', function() {
    $('.text').text(' ');
    apiCall(Object.values(movieData.romance));
    $('.text').append('<h1> Peliculas que causan ' + movieArrayData[4] + '</h1>');
    $('.slider').hide();
    $('.title').hide();
  });
  $('#romance').on('mouseover', function() {
    $('.carita5').show();
    $('.carita5').addClass('efecto-carita');
  });
  $('#romance').on('mouseout', function() {
    $('.carita5').hide();
  });


  $('#aventura').on('click', function() {
    $('.text').text(' ');
    apiCall(Object.values(movieData.aventura));
    $('.text').append('<h1> Peliculas que causan ' + movieArrayData[5] + '</h1>');
    $('.slider').hide();
    $('.title').hide();
  });
  $('#aventura').on('mouseover', function() {
    $('.carita6').show();
    $('.carita6').addClass('efecto-carita');
  });
  $('#aventura').on('mouseout', function() {
    $('.carita6').hide();
  });
});
