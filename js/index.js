$(document).ready(function () {

    load_data();
    $(".btnDelete").click(function () {
        var movieList = JSON.parse(localStorage.getItem("movieList"));
        var movie = $(this).val();
        movieList.splice(movie, 1);
        localStorage.setItem("movieList", JSON.stringify(movieList));
        load_data();
    });


});
function load_data() {

    var movieList = JSON.parse(localStorage.getItem("movieList"));
    var message = "";

    if (movieList === null) {
        message += "<h2>There are no contents to show.</h2>";
    } else {
        for (var i = 0; i < movieList.length; i++) {
            var movie = movieList[i];
            message += "<div class='card'>"
                    + "<div class='card-header'>"
                    + "<b><h5>" + movie.Title +"</h5></b>"
                    + "<button class='btnDelete btn btn-danger' value=" + i + "><i class='fa fa-trash'></i>Delete</button>"
                    + "</div>"
                    + "<div class='card-body'>"
                    + "<blockquote class='blockquote mb-0'>"
                    + "<p>" + movie.Plot + "</p>"
                    + "</blockquote>"
                    + "</div>"
                    + "</div><br/>";
        }
    }

    $("#contents").html(message);
}

