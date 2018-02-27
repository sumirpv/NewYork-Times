

        $("button").on("click", function() {
         
var person = $(this).attr("data-person");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=cd70df70e6164680ae56df5cee60ca8f"    
    
      var queryURL = ;

      //ajax function for api key
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      //function for the articles to be pulled
      .then(function(response) {

    
        var retrieveArticle = response.data; //object storing array of data

        $("insert div here for articles to appear").empty(); //clears any repeating articles upon further searches

        var itemsList = $("<div>"); //creates a div on memory
        itemsList.attr("tag used to modify", response.);

        itemsList.prepend()

        $("insert div here for articles to appear").prepend()

      

  
        $("button").on("click", function.() {
         
var person = $(this).attr("data-person");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=cd70df70e6164680ae56df5cee60ca8f"    
    
      var queryURL = ;

      //ajax function for api key
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      //function for the articles to be pulled
      .then(function(response) {

    
        var retrieveArticle = response.data; //object storing array of data

        $("insert div here for articles to appear").empty(); //clears any repeating articles upon further searches

        var itemsList = $("<div>"); //creates a div on memory (exists only in JS thus far)
        itemsList.attr("tag used to modify", response.);

        itemsList.prepend()

        $("insert div here for articles to appear").prepend()

      
        
      });
        
      });

   