
  $("#buzzbutton").on("click", function() {


    var queryURL = "http://69.120.124.59:5050/buzz";
    
    $.ajax({
         url: queryURL,
         method: "GET",
         crossOrigin: true
       }).done(function(response) {
           console.log(response);
           console.log("buzz");
       });    
    });
