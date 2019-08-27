// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("WORKING!")
$(document).ready(function(){
console.log("BURGERS JS WORKING")
  $(".change-devour").on("click", function(event) {
    console.log("CLICKED!")
    event.preventDefault()
    var id = $(this).attr("data-id");
    var newDevoure = $(this).attr("data-newdevoured");
    console.log(id)
    console.log(newDevoure)

    var newDevouredState = {
      devoured: newDevoure
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoure to", newDevoure);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        loburgerion.reload();
      }
    );
  });
})
  
