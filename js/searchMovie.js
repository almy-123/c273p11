$(document).ready(function () {

    var movieList = JSON.parse(localStorage.getItem("movieList"));
    if (movieList === null) {
        movieList = [];
    }

    $("#btnSearch").click(function () {
        var title = $("#sTitle").val();
        var year = $("#sYear").val();
        var plot = $("#sPlot").val();

        $.ajax({
            type: "GET",
            url: "https://www.omdbapi.com/",
            data: "t=" + title + "&y=" + year + "&plot=" + plot + "&apikey=d2bdeb78",
            cache: false,
            dataType: "jsonp",
            success: function (response) {
                var message = "";
                message += "<b>Title:</b> " + response.Title + "<br/>"
                        + "<b>Released:</b> " + response.Released + "<br/>"
                        + "<b>Run Time:</b> " + response.Runtime + "<br/>"
                        + "<b>Genre:</b> " + response.Genre + "<br/>"
                        + "<b>Actors:</b> " + response.Actors + "<br/>"
                        + "<B>Plot:</b> " + response.Plot + "<br/>";
                movieList[movieList.length] = response;
                localStorage.setItem("movieList", JSON.stringify(movieList));
                $("#contents").html(message);

                if (response.Poster !== "N/A") {
                    var image = "<img src=" + response.Poster + "/>";
                    $("#poster").html(image);
                }else{
                    $("#poster").html("");
                }

            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });
});