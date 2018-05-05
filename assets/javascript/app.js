//api key - hHd2CWeLr5RA62XeJumOmFy6eO0sv7hk

$(function() {
    var topics = ["warriors", "nba", "movies"];



    function btnDisplay(){
        for (var i = 0; i < topics.length; i++){
            var tempBtn = $("<button>");
            tempBtn.text(topics[i]);
            tempBtn.attr("id", "gifBtn")
            tempBtn.attr("subject", topics[i]);

            var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=hHd2CWeLr5RA62XeJumOmFy6eO0sv7hk&limit=10";

            
            $.ajax({
                url: queryUrl,
                method: "GET"
            }).then(function(response){
                console.log(response.data);
                tempBtn.attr("")
            })


            $("#buttons").append(tempBtn);
        }
    }
    function newBtn(string){



    }

    btnDisplay();

    function gifReturn(string){



    }

    $(document).on("click", "#gifBtn", function(){

    });

});
