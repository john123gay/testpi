
  $("#buzzbutton").on("click", function() {


    var queryURL = process.env.API;
    
    $.ajax({
         url: queryURL,
         method: "GET"
       }).done(function(response) {
        
           console.log("buzz");
       });    
    });