//api key - hHd2CWeLr5RA62XeJumOmFy6eO0sv7hk

$(function() {
    var topics = ["warriors", "nba", "movies"];

    function btnDisplay(){
        $("#buttons").empty();
        for (var i = 0; i < topics.length; i++){
            var tempBtn = $("<button>");
            tempBtn.text(topics[i]);
            tempBtn.attr("id", "gifBtn")
            tempBtn.attr("subject", topics[i]);
            $("#buttons").append(tempBtn);
        }
    }
    function newBtn(){
        var searchTerm = $("#search-term").val().trim();
        console.log(searchTerm);
        topics.push(searchTerm);
        btnDisplay();
    }

    btnDisplay();

    $(document).on("click", "#gifBtn", function(){
        var term = $(this).attr("subject");
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + term + "&api_key=hHd2CWeLr5RA62XeJumOmFy6eO0sv7hk&limit=10";
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            // console.log(response.data);
            for (var j = 0; j < response.data.length; j++){
                var movingLink = response.data[j].images.fixed_height.url;
                console.log(movingLink);
                var newImg = $("<img>");
                newImg.attr("src", response.data[j].images.fixed_height_still.url);
                newImg.attr("still", response.data[j].images.fixed_height_still.url);
                newImg.attr("moving", response.data[j].images.fixed_height.url);
                newImg.attr("rating", response.data[j].rating);
                newImg.attr("data-state", "still");
                $("#gif-section").prepend("<p>Rating: " + response.data[j].rating + "<p>");
                $("#gif-section").prepend(newImg);
            }
        })
    });

    $(document).on("click", "#searchBtn", function(){
        newBtn();
        document.getElementById($(".form-control").val(""));
    });

    $(document).on("click", "img", function(){
        if($(this).attr("data-state") === "still"){
            $(this).attr("src", $(this).attr("moving"));
            $(this).attr("data-state", "moving");
        }
        else{
            $(this).attr("src", $(this).attr("still"));
            $(this).attr("data-state", "still");
        }
    })
})
