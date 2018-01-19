(function() {
  $(init);
  function init() {
    var searchBtn = $('#searchBtn');
    var titleFld = $('#title');
    searchBtn.click(searchMovie);
    function searchMovie() {
      var titleText = titleFld.val();
      var url = 'http://www.omdbapi.com/?apikey=a498e26d&s=' + titleText;
      console.log(url);
      $.ajax({
        url: url,
        success: renderMovies,
        error: renderError,
      });
    }
    function renderMovies(response) {
      console.log(response);
      var movies = response.Search;
      console.log(movies);
      var resultsUl = $('#results');
      resultsUl.empty();
      for (var m in movies) {
        var movie = movies[m];
        var title = movie.Title;
        var poster = movie.Poster;
        var year = movie.Year;
        console.log([title, year, poster]);
        var liMovie = $('<li class="list-group-item"></li>');
        var posterImg = $('<img src = "' + poster + '"width="50px"/>');
        liMovie.append(posterImg);
        liMovie.append(title);
        liMovie.click(renderDetails);
        resultsUl.append(liMovie);
      }
      function renderDetails() {
        console.log('render Details');
      }
    }
    function renderError(error) {
      console.log(error);
    }
  }
})();
