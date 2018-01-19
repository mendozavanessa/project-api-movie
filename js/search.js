$(document).ready(function() { 
  // creando objeto
  var arrayMovies = [
    arrayMovieAlegria = ['Duplex', 'Shrek', 'Shrek 2', 'Scary Movie', 'American Pie', 'Click'],
    arrayMovieAdrenalina = ['Die Hard', 'Rambo', 'Kill Bill: Vol. 1', 'Kill Bill: Vol. 2', 'Terminator 2', 'James Bond 007'],
    arrayMovieRomance = ['Titanic', '50 First Dates', 'Her', 'The Notebook', 'Ghost', 'The Wedding Singer'],
    arrayMovieMiedo = ['The Exorcist', 'It', 'The Babadook', 'It Follows', 'Damien: Omen II', 'The Conjuring'],
    arrayMovieAventura = ['Star Wars: The Last Jedi', 'Harry Potter and the Order of the Phoenix', 'The Lord of the Rings: The Fellowship of the Ring', 'Indiana Jones and the Last Crusade', 'Mad Max', 'Jurassic Park'],
    arrayMovieReflexión = ['Forrest Gump', 'Eternal Sunshine of the Spotless Mind', 'Little Miss Sunshine', 'Big Fish', 'Silver Linings Playbook', 'The Bucket List'],
  ];

  var emotionBtn = document.getElementsByTagName('li');
  console.log(emotionBtn);

  for (var i = 0;i < emotionBtn.length; i++) {
    emotionBtn[i].addEventListener('click', function() {
      arrayMovies[i]
      alert('hola');
    });
  }
});