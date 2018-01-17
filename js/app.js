(function() {
  $(init);
  function init() {
    var searchBtn = $('#searchBtn');
    var titleFld = $('#title');
    searchBtn.click(searchMovie);

    function searchMovie() {
      var titleText = titleFld.val();
      alert('searchMovie' + titleText);
      var url = ' http://www.omdbapi.com/?apikey=79428951&s=' + titleText;
      console.log(url);

      $.ajax({
        url: url,
        success: renderMovies,
        error: renderError,
      });
    }

    function renderMovies(response) {
      console.log(response);
      var movies = response.search;
      var resultsUl = $('#results');
      for (var m in movies) {
        var movie = movies[m];
        var title = movie.Title;
        var imdbID = title.imdbID;
        var poster = imdbID.Poster;
        console.log([title, imdbID, poster]);
        var li = $('<li>');
        li.append(title);
        resultsUl.li;
      }
    }

    function renderError(error) {
      console.error(error);
    }
  }
  
}) () ;
// $.ajax({
//   type: 'GET',
//   url: ' http://www.omdbapi.com/?i=tt3896198&apikey=79428951',
//   success: function(data) {
//     console.log(data);
//   }
// });

