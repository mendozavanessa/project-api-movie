$(document).ready('load', function() {
  var searchBtn = $('#searchBtn');
  // var btnAlegria = $('.btn-alegria');
  // var btnAdrenalina = $('.btn-Adrenalina');
  // var btnRomance = $('.btn-Romance');
  // var btnMiedo = $('.btn-Miedo');
  // var btnAventura = $('.btn-Aventura');
  // var btnReflexión = $('.btn-Reflexión');

  var arrayMovieAlegria = ['Duplex', 'Shrek', 'Shrek 2', 'Scary Movie', 'American Pie', 'Click'];
  var arrayMovieAdrenalina = ['Die Hard', 'Rambo', 'Kill Bill: Vol. 1', 'Kill Bill: Vol. 2', 'Terminator 2', 'James Bond 007'];
  var arrayMovieRomance = ['Titanic', '50 First Dates', 'Her', 'The Notebook', 'Ghost', 'The Wedding Singer'];
  var arrayMovieMiedo = ['The Exorcist', 'It', 'The Babadook', 'It Follows', 'Damien: Omen II', 'The Conjuring'];
  var arrayMovieAventura = ['Star Wars: The Last Jedi', 'Harry Potter and the Order of the Phoenix', 'The Lord of the Rings: The Fellowship of the Ring', 'Indiana Jones and the Last Crusade', 'Mad Max', 'Jurassic Park']
  var arrayMovieReflexión = ['Forrest Gump', 'Eternal Sunshine of the Spotless Mind', 'Little Miss Sunshine', 'Big Fish', 'Silver Linings Playbook', 'The Bucket List'];
  
  searchBtn.click(searchMovieEmotion);
  function searchMovieEmotion() {
    var arrayMovieAlegria = ['Amor ciego', 'Big Mama', 'Shrek', 'Shrek 2', 'Los gemelos alborotados', 'La gran comedia', 'Scary Movie', 'Scary Movie 2', 'Scary Movie 3', 'The Disaster Artist', 'Toni Erdmann']
    var url = 'http://www.omdbapi.com/?i=' + arrayMovieAlegria[1] + '&apikey=79428951';
    
    $.ajax({
      type: 'GET',
      url: url,
      success: function(data) {
        console.log(data);
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  }

  // function data(response) {
  //   var searchMovie = response.

  // }
  

});

// var movieArray = ['tt3896198&', 'tt4048272']
// for (var i = 0; i < arrayMovieAlegria.length; i++) {
// }

//     var searchBtn = $('#searchBtn');
//     var titleFld = $('#title');
//     searchBtn.click(searchMovie);

//     function searchMovie() {
//       var titleText = titleFld.val();
//       alert('searchMovie' + titleText);
//       var url = 'http://www.omdbapi.com/?apikey=79428951&s=' + titleText;
//       console.log(url);

//       $.ajax({
//         url: url,
//         success: renderMovies,
//         error: renderError,
//       });
//     }

//     function renderMovies(response) {
//       console.log(response);
//       var movies = response.search;
//       var resultsUl = $('#results');
//       resultsUl.empty();

//       for (var m in movies) {
//         var movie = movies[m];
//         var title = movie.Title;
//         var imdbID = title.imdbID;
//         var poster = imdbID.Poster;
//         console.log([title, imdbID, poster]);
//         var liMovie = $('<li class="list-group-item">');
//         var posterImg = $('<img src="' + poster + '" width="50px">');
//         liMovie.append(posterImg);
//         liMovie.append(title);
//         liMovie.click(renderDetails);
//         resultsUl.append(liMovie);
//       }

//       function renderDetails() {
//         console.log('render details');
//       }
//     }

//     function renderError(error) {
//       console.error(error);
//     }

