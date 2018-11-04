var movies = [];

for (var i = 0; i < 6; i++) {
    var movieName = prompt ('Movie Name?');
    var date = prompt ('Movie date?');
    var actor = prompt ('Main actor name?');
    movies.push({'movieName': movieName, 'date': date, 'actor': actor });
}

var answer = prompt ('Please choose a movie a I will give you the airing date');
getMovieDate();

function getMovieDate() {
    for (var i= 0; i <  movies.length; i++) {
        if (answer === movies[i].movieName) { 
            return alert (movies[i].date); 
        } 
    }
        alert('We don\'t have that movie');
}