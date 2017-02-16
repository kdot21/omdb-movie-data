// it is convention to use all caps for constants
// constants are variables whose value are not expected to change, immutable
var OMDB_API_URL = 'https://www.omdbapi.com/?';

function getOMDBResults(title) {
  if (title.length == 0) {
    $('#result').html('Please enter text into the search field');
  } else {
    $.get(OMDB_API_URL + 't=' + title, 
        function(searchResult) { 
          console.log(searchResult.Title);
      
          var stringOutput = 'No results found';
      
          if (searchResult.Response == 'True') {
            stringOutput = '<p>' + searchResult.Title + '<br>';
            stringOutput += searchResult.Year + '<br>';
            stringOutput += searchResult.Released + '<br>';
            stringOutput += searchResult.Actors + '<br>';
            stringOutput += "<img src='" + searchResult.Poster + "'>";
            stringOutput += '</p>';
          }
        $('#result').html(stringOutput);
        });
  }
};

$('#searchBtn').on('click', function(e) {
  e.preventDefault();
  
  getOMDBResults($('#searchField').val());
});

