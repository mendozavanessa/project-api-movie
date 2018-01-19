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

  // funcionalidad aurora
  var arrayMovieAlegria = ['Duplex', 'Shrek', 'Shrek 2', 'Scary Movie', 'American Pie', 'Click'];
  var arrayMovieAdrenalina = ['Die Hard', 'Rambo', 'Kill Bill: Vol. 1', 'Kill Bill: Vol. 2', 'Terminator 2', 'James Bond 007'];
  var arrayMovieRomance = ['Titanic', '50 First Dates', 'Her', 'The Notebook', 'Ghost', 'The Wedding Singer'];
  var arrayMovieMiedo = ['The Exorcist', 'It', 'The Babadook', 'It Follows', 'Damien: Omen II', 'The Conjuring'];
  var arrayMovieAventura = ['Star Wars: The Last Jedi', 'Harry Potter and the Order of the Phoenix', 'The Lord of the Rings: The Fellowship of the Ring', 'Indiana Jones and the Last Crusade', 'Mad Max', 'Jurassic Park']
  var arrayMovieReflexión = ['Forrest Gump', 'Eternal Sunshine of the Spotless Mind', 'Little Miss Sunshine', 'Big Fish', 'Silver Linings Playbook', 'The Bucket List'];
  
  
});
