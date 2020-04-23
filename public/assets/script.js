$(document).ready(function() {
    $(".devour-form").on("click", function(event) {
      //var id = $(this).children(".burger_id").val();
      var id = $(this).data("id");
      console.log(id);
     
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        // data: burgerEaten
        //URL: "/:id" + id
      }).then(
        function() {
          console.log("NOM NOM NOM!");
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
  
