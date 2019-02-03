
  $("#buzzbutton").on("click", function() {


    var queryURL = "https://69.113.126.184:5050/?TEST&BLINK";
    
    $.ajax({
         url: queryURL,
         method: "GET"
       }).done(function(response) {
        
           console.log("buzz");
       });    
    });
