$("button").on("click", function (event) {;
    event.preventdefault();
    var person = $("#exampleInputName2").val().trim();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; +
    person + "&api_key=cd70df70e6164680ae56df5cee60ca8f";
    console.log(queryURL);

    //ajax function for api key
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        //function for the articles to be pulled
        .then(function (response) {


            var retrieveArticle = response.data; //object storing array of data

            $("insert div here for articles to appear").empty(); //clears any repeating articles upon further searches

            var itemsList = $("<div>"); //creates a div on memory
            itemsList.attr("tag used to modify", response);

            itemsList.prepend()

            $("insert div here for articles to appear").prepend()



                    });

            });

