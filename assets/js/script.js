function sendMail () {
  var params = {
    from_name : document.getElementById("name").value,
    from_surname : document.getElementById("surname").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_hn3a8th", "template_fr8mm7j", params).then(function (res) {
    alert("Succes !" + res.status);
  })
}