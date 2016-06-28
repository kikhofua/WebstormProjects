/**
 * Created by 207493 on 6/28/16.
 */
var movies = require('./movies');
var emilysmovies = movies();
emilysmovies.favMovie = "The Notebook";
console.log("Emily's favorite movies is: " + emilysmovies.favMovie);