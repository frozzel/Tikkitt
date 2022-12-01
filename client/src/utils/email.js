var sendemail = require('sendemail')
var email = sendemail.email;


var person = {
  name : "Jenny",
  email: "your.name+test" + Math.random() + "@gmail.com", // person.email can also accept an array of emails
  subject:"Welcome to DWYL :)"
}

email('welcome', person, function(error, result){
  console.log(' - - - - - - - - - - - - - - - - - - - - -> email sent: ');
  console.log(result);
  console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - -')
})
