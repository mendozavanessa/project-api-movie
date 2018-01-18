$(document).ready(function() {
  var movieArray = ['Star Wars', 'Game of Thrones', 'Lord of the Rings', 'Harry Potter', 'Titanic'];
  console.log(movieArray);
  function apiCall() {
    for (var i = 0; i < movieArray.length; i++) {
      console.log(movieArray[i]);
      $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(movieArray[i]) + '&apikey=a498e26d').then(function(response) {
        console.log(response);
        var image = response.Poster;
        console.log(image);
        if (image !== 'N/A') {
          $('.images').append('<img src="' + image + '"></img>');
        }
      });
    }
  }
  $('#miedo').on('click', function() {
    apiCall();
  });
  $('#alegria').on('click', function() {
    window.location.replace('view/secondView.html');
  });
  $('#amor').on('click', function() {
    apiCall();
  });
  $('#intriga').on('click', function() {
    apiCall();
  });
});
