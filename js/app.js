$(document).ready(function() {
  // var movieArrayData = Object.keys(movieData);
  // console.log(movieArrayData);
  // function apiCall(arr) {
  //   for (var i = 0; i < arr.length; i++) {
  //     console.log(arr);
  //     $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(arr[i]) + '&apikey=a498e26d').then(function(response) {
  //       console.log(response);
  //       var image = response.Poster;
  //       console.log(image);
  //       if (image !== 'N/A') {
  //         $('.images').append('<img src="' + image + '"></img>');
  //       }
  //     });
  //   }
  // }
  $('#miedo').on('click', function() {
    window.location.replace('view/secondView.html');
    var alegria = 'alegria'
  });
  $('#alegria').on('click', function() {
    window.location.replace('view/secondView.html');
    var alegria = 'alegria'
  });
  $('#amor').on('click', function() {
    window.location.replace('view/secondView.html');
    var alegria = 'alegria'
  });
  $('#intriga').on('click', function() {
    window.location.replace('view/secondView.html');
    var alegria = 'alegria'
  });
});
