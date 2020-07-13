$(document).ready(function() {
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
      var id = $(this).children(".burger_id").val();
      console.log(id);     
      $.ajax({
        type: "PUT",
        url: "/api/burger/" + id
      }).then(
        function(data) {
          console.log("NOM NOM NOM!");
          console.log(data);
          location.reload();
        }
      );
    });
  
    $(".order-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
        let newBurger = {
            burger_name: $("#burgerOrder").val().trim(),
         };
         console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            console.log("Your burger is ready!");
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });
   
  });
  
