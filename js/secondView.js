$(document).ready(function() {
  var movieArrayData = Object.keys(movieData);
  console.log(movieArrayData);
  function apiCall(arr) {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr);
      $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(arr[i]) + '&apikey=a498e26d').then(function(response) {
        console.log(response);
        var image = response.Poster;
        console.log(image);
        if (image !== 'N/A') {
          $('.images').append('<img src="' + image + '"></img>');
        }
      });
    }
  }
  if (alegria = 'alegria') {
    apiCall(Object.values(movieData.miedo));
  }
  $('#miedo').on('click', function() {
    apiCall(Object.values(movieData.miedo));
  });
  $('#alegria').on('click', function() {
    apiCall(Object.values(movieData.alegria));
  });
  $('#amor').on('click', function() {
    apiCall();
  });
  $('#intriga').on('click', function() {
    apiCall();
  });
});
