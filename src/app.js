import $ from "jquery"
import "bootstrap"
import "./assets/styles/main.scss"

document.addEventListener("DOMContentLoaded", () => {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName("needs-validation")
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener(
      "submit",
      function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          console.log("false")
          // $("#contact-us-form button[type='submit']").prop('disabled', true);
          event.stopPropagation()
        }

        console.log(form.checkValidity())

        form.classList.add("was-validated")
        
        if (form.checkValidity() == true) {
          // $("#contact-us-form button[type='submit']").prop('disabled', false);
          console.log('wow')
          event.preventDefault()
          $.post(
            $("#contact-us-form").attr("action"),
            JSON.stringify({
              phone: $("#contact-us-form input[name='phone']").val(),
              message: $("#contact-us-form textarea[name='message']").val()
            })
          )
            .done(function(msg) {
            $("#contact-us-form button[type='submit']").removeClass('d-block').toggleClass("d-none")
            $("#contact-us-form h2.success").toggleClass("d-none")
            })
            .fail(function(xhr, status, error) {
              // error handling
              console.log("f")
            })
        }

      },
      false
    )
  })
})

$(window).on("scroll", function() {
  if ($(window).scrollTop() > 0) {
    $(".navbar-scrolling").addClass("scroll")
  } else {
    $(".navbar-scrolling").removeClass("scroll")
  }
})

// $(function() {
//   $("#contact-us-form").submit(function(e) {
//     $.post(
//       $("#contact-us-form").attr("action"),
//       JSON.stringify({
//         name: $("#contact-us-form input[name='name']").val(),
//         email: $("#contact-us-form input[name='email']").val(),
//         phone: $("#contact-us-form input[name='phone']").val(),
//         message: $("#contact-us-form textarea[name='message']").val()
//       })
//     )

//     $(".thanks").toggleClass("d-none")
//     $("#contact-us-form button").hide()
//   })
// })
