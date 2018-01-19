$(document).ready(function() { 
  // creando objeto
  var arrayMovies = [
    ['Duplex', 'Shrek', 'Shrek 2', 'Scary Movie', 'American Pie', 'Click'],
    ['Die Hard', 'Rambo', 'Kill Bill: Vol. 1', 'Kill Bill: Vol. 2', 'Terminator 2', 'James Bond 007'],
    ['Titanic', '50 First Dates', 'Her', 'The Notebook', 'Ghost', 'The Wedding Singer'],
    ['The Exorcist', 'It', 'The Babadook', 'It Follows', 'Damien: Omen II', 'The Conjuring'],
    ['Star Wars: The Last Jedi', 'Harry Potter and the Order of the Phoenix', 'The Lord of the Rings: The Fellowship of the Ring', 'Indiana Jones and the Last Crusade', 'Mad Max', 'Jurassic Park'],
    ['Forrest Gump', 'Eternal Sunshine of the Spotless Mind', 'Little Miss Sunshine', 'Big Fish', 'Silver Linings Playbook', 'The Bucket List'],
  ];

  $('.btn-alegria').on('click', function() {
    var arrMovieAlegria = arrayMovies[0];
    var image = $('a.thumbnail>img');
    console.log(image);
    for (var i = 0;i < image.length;i++) {
      arrMovieAlegria.$each() {
        image.attr('src','src');
      }

    }
  });
});