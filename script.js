let dark = document.getElementById("dark");
dark.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    dark.src = "media/sun.png";
  } else {
    dark.src = "media/moon.png";
  }
};

function sendEmail() {
  Email.send({
    SecureToken : "19a35bb5-05d4-4fb4-93d6-87d7ff89da79",
    To : 'https://bspadhy1999.github.io/myportfolio.github.io/',
    From : document.getElementById("email").value,
    Subject : "Message From Your Portfolio Website",
    Body : "Name : " + document.getElementById("name").value +
           "<br> Email : " + document.getElementById("email").value +
           "<br> Mobile No. : " + document.getElementById("mobile").value +
           "<br> Message : " + document.getElementById("message").value
}).then(
  message => swal("Thank u!", "You Message Sent Sucessfully.", "success")
);
}